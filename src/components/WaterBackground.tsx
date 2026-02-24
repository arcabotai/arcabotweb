"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Water Shader ───────────────────────────────────────────────────────────

const vertexShader = `
  uniform float uTime;
  uniform float uWaveSpeed;
  uniform float uWaveHeight;

  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;

    vec3 pos = position;

    // Layered gentle waves
    float wave1 = sin(pos.x * 1.2 + uTime * uWaveSpeed * 0.8) *
                  cos(pos.y * 0.9 + uTime * uWaveSpeed * 0.5) * uWaveHeight;
    float wave2 = sin(pos.x * 0.6 + pos.y * 0.8 + uTime * uWaveSpeed * 0.4) * uWaveHeight * 0.5;
    float wave3 = cos(pos.x * 2.0 + uTime * uWaveSpeed * 1.2) * uWaveHeight * 0.25;

    pos.z += wave1 + wave2 + wave3;
    vElevation = (wave1 + wave2 + wave3) / uWaveHeight;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uDeepColor;
  uniform vec3 uShallowColor;
  uniform vec3 uGoldColor;
  uniform float uOpacity;

  varying vec2 vUv;
  varying float vElevation;

  // Simple noise for caustic patterns
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    // Base ocean color based on wave elevation
    float t = (vElevation + 1.0) * 0.5;
    vec3 oceanColor = mix(uDeepColor, uShallowColor, t);

    // Subtle caustic-like ripple pattern
    vec2 causticUv = vUv * 8.0 + uTime * 0.05;
    float caustic1 = smoothNoise(causticUv);
    float caustic2 = smoothNoise(causticUv * 1.7 + vec2(3.1, 1.7));
    float causticPattern = (caustic1 * caustic2) * 0.15;

    // Gold specular highlight on wave crests
    float specular = smoothstep(0.3, 1.0, vElevation);
    float goldHighlight = specular * 0.12;

    vec3 finalColor = oceanColor + causticPattern * uShallowColor;
    finalColor = mix(finalColor, uGoldColor, goldHighlight);

    // Fade to very dark at edges (vignette)
    vec2 center = vUv - 0.5;
    float vignette = 1.0 - dot(center, center) * 1.5;
    vignette = clamp(vignette, 0.0, 1.0);

    gl_FragColor = vec4(finalColor * vignette, uOpacity * vignette * 0.85);
  }
`;

// ─── Water Mesh ─────────────────────────────────────────────────────────────

function WaterPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWaveSpeed: { value: 0.4 },
    uWaveHeight: { value: 0.18 },
    uDeepColor: { value: new THREE.Color("#020a14") },   // very dark navy
    uShallowColor: { value: new THREE.Color("#0c2340") }, // deep ocean blue
    uGoldColor: { value: new THREE.Color("#f59e0b") },    // amber gold
    uOpacity: { value: 0.7 },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -0.5, 0]}>
      {/* Low-poly: 80x80 segments — gentle but not too heavy */}
      <planeGeometry args={[14, 14, 80, 80]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent={true}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// ─── Fog Plane (horizon gradient) ───────────────────────────────────────────

function FogVeil() {
  return (
    <mesh position={[0, -0.1, -3]}>
      <planeGeometry args={[20, 6]} />
      <meshBasicMaterial
        color="#06090f"
        transparent
        opacity={0.45}
        depthWrite={false}
      />
    </mesh>
  );
}

// ─── Scene ──────────────────────────────────────────────────────────────────

function OceanScene() {
  return (
    <>
      <fog attach="fog" args={["#06090f", 8, 20]} />
      <ambientLight intensity={0.1} />
      <directionalLight
        position={[2, 5, 2]}
        intensity={0.3}
        color="#fbbf24"
      />
      <WaterPlane />
      <FogVeil />
    </>
  );
}

// ─── Root Export ─────────────────────────────────────────────────────────────

export default function WaterBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#06090f",
      }}
    >
      <Canvas
        camera={{ position: [0, 3.5, 6], fov: 55, near: 0.1, far: 40 }}
        gl={{
          antialias: false,           // cheaper — still looks great
          alpha: false,
          powerPreference: "low-power",
          preserveDrawingBuffer: false,
        }}
        dpr={[1, 1.5]}               // cap pixel ratio for perf
        style={{ width: "100%", height: "100%" }}
        frameloop="always"
      >
        <OceanScene />
      </Canvas>
    </div>
  );
}
