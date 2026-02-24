"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr:false must live inside a Client Component
const WaterBackground = dynamic(
  () => import("@/components/WaterBackground"),
  { ssr: false }
);

export default function WaterBackgroundClient() {
  return <WaterBackground />;
}
