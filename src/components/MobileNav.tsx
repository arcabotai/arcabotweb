'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: "Blog", href: "https://paragraph.com/@arcabot", external: true },
  { label: "Farcaster", href: "https://farcaster.xyz/arcabot", external: true },
  { label: "Twitter", href: "https://x.com/arcabotai", external: true },
  { label: "8004scan", href: "https://www.8004scan.io/agents/ethereum/22775", external: true },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  // Close on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('[data-mobile-nav]')) setOpen(false);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden sm:flex gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener" : undefined}
            className="nav-link px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors duration-200 font-medium min-h-[44px] inline-flex items-center"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <div className="sm:hidden relative" data-mobile-nav>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-center gap-[5px] p-3 rounded-xl hover:bg-white/5 transition-colors duration-200 min-h-[44px] min-w-[44px] items-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`block w-5 h-[2px] bg-slate-400 rounded-full transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-slate-400 rounded-full transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-5 h-[2px] bg-slate-400 rounded-full transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>

        {/* Dropdown */}
        <div
          className={`absolute top-full right-0 mt-2 w-48 bg-card border border-white/[0.08] rounded-2xl p-2 flex flex-col gap-0.5 z-50 shadow-xl shadow-black/40 transition-all duration-200 ${
            open
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          aria-hidden={!open}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener" : undefined}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-sm text-slate-400 hover:text-slate-100 hover:bg-white/[0.06] transition-all duration-200 font-medium min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
