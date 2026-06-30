'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
  external: boolean;
  highlight?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Builds", href: "#builds", external: false },
  { label: "Can Do", href: "#capabilities", external: false },
  { label: "Chains", href: "#chains", external: false },
  { label: "Fork FAQ", href: "/farcaster-fork", external: false, highlight: true },
  { label: "Farcaster", href: "https://farcaster.xyz/arcabot.eth", external: true },
  { label: "GitHub", href: "https://github.com/arcabotai", external: true },
  { label: "Blog", href: "https://paragraph.com/@arcabot", external: true },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) {
      window.setTimeout(() => buttonRef.current?.focus(), 0);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu(true);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [closeMenu]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleClick = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest('[data-mobile-nav]')) closeMenu();
    };
    document.addEventListener('click', handleClick);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('click', handleClick);
    };
  }, [open, closeMenu]);

  return (
    <>
      {/* Desktop nav */}
      <div className="hidden sm:flex gap-1">
        {navLinks.slice(0, 5).map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener" : undefined}
            className={`nav-link px-3 py-2 rounded-lg text-xs transition-colors duration-200 font-medium min-h-[44px] inline-flex items-center ${
              link.highlight
                ? 'text-amber-300 bg-amber-400/10 border border-amber-400/25 hover:bg-amber-400/15'
                : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger + sheet */}
      <div className="sm:hidden" data-mobile-nav>
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="flex flex-col justify-center gap-[5px] p-3 rounded-xl hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 transition-colors duration-200 min-h-[44px] min-w-[44px] items-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation-panel"
        >
          <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-slate-300 rounded-full transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>

        {open && (
          <>
            <div
              className="fixed inset-0 z-40 bg-deep/70 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => closeMenu(false)}
            />

            <div
              id="mobile-navigation-panel"
              className="fixed left-4 right-4 top-[76px] z-50 rounded-2xl border border-amber-400/15 bg-[#0b111c]/95 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-slate-400">
                Navigate Arca
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener" : undefined}
                    onClick={() => closeMenu(false)}
                    className={`flex min-h-[46px] items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 hover:bg-white/[0.07] hover:text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 ${
                      link.highlight ? "bg-amber-400/10 text-amber-300" : "text-slate-300"
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[0.68rem] text-slate-400">{link.external ? '↗' : '↓'}</span>
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
