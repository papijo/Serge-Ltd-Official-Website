"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/icons/LogoMark";
import { NAV_CONFIG } from "@/lib/data";
import { useNavStore } from "@/store/useNavStore";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();
  const { menuOpen, activeCategory, hoveredCategory, toggleMenu, setActiveCategory, setHoveredCategory, closeAll } = useNavStore();
  const [scrolled, setScrolled] = useState(false);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    closeAll();
  }, [pathname, closeAll]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavItemEnter = (label: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    const item = NAV_CONFIG.find((c) => c.label === label);
    if (item && item.children) {
      setHoveredCategory(label);
    } else {
      setHoveredCategory(null);
    }
  };

  const handleNavItemLeave = () => {
    hoverTimer.current = setTimeout(() => setHoveredCategory(null), 150);
  };

  const handleMegaPanelEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const hoveredData = NAV_CONFIG.find((c) => c.label === hoveredCategory);
  const activeCatData = NAV_CONFIG.find((c) => c.label === (activeCategory || "Services"));

  return (
    <>
      {/* Main nav */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(4,18,28,0.97)] backdrop-blur-xl border-b border-[rgba(175,208,222,0.22)] shadow-[0_12px_28px_-20px_rgba(0,0,0,0.8)]"
            : "bg-transparent border-b border-transparent"
        }`}
        style={{ height: 76 }}
      >
        <div className="grid h-full px-5 md:px-10 items-center" style={{ gridTemplateColumns: "1fr auto 1fr" }}>
          {/* Left: hamburger + logo */}
          <div className="flex items-center gap-10 justify-self-start">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center gap-2.5 bg-transparent border-none text-[#e2ecf0] cursor-pointer p-2 opacity-80 hover:opacity-100 transition-opacity"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <line x1="3" y1="3" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="15" y1="3" x2="3" y2="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <line x1="2" y1="4.5" x2="16" y2="4.5" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="2" y1="13.5" x2="16" y2="13.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
            <Link href="/" className="inline-flex items-center" aria-label="SERGE Home">
              <LogoMark className="w-10 h-auto" />
            </Link>
          </div>

          {/* Center: primary nav */}
          <div className="hidden lg:inline-flex items-center gap-10 justify-self-center">
            {NAV_CONFIG.filter((c) => c.label !== "Home").map((cat) => (
              <div
                key={cat.label}
                className="relative"
                onMouseEnter={() => handleNavItemEnter(cat.label)}
                onMouseLeave={handleNavItemLeave}
              >
                <Link
                  href={cat.path}
                  className={`inline-flex items-center gap-1.5 text-[rgba(255,255,255,0.75)] no-underline font-sans text-[13px] font-medium uppercase tracking-widest h-[76px] px-1 relative transition-colors duration-180 hover:text-[#f9ac43] ${
                    pathname === cat.path || pathname.startsWith(cat.path + "/") ? "text-[#f9ac43]" : ""
                  }`}
                  style={{ letterSpacing: "0.14em" }}
                >
                  {cat.label}
                  {cat.children && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className={`transition-transform duration-200 ${hoveredCategory === cat.label ? "rotate-180" : ""}`}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  )}
                  <span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9ac43] transition-transform duration-180 origin-left"
                    style={{
                      transform:
                        pathname === cat.path || hoveredCategory === cat.label ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Right: empty utility area */}
          <div className="justify-self-end" />
        </div>
      </nav>

      {/* Desktop mega panel */}
      {hoveredData && hoveredData.children && (
        <div
          className="fixed left-0 right-0 z-[95] bg-[rgba(6,24,38,0.98)] backdrop-blur-xl border-t border-b border-[rgba(175,208,222,0.11)] shadow-[0_22px_44px_-24px_rgba(0,0,0,0.65)] mega-panel-enter"
          style={{ top: 76 }}
          onMouseEnter={handleMegaPanelEnter}
          onMouseLeave={handleNavItemLeave}
        >
          <div
            className="grid max-w-[1280px] mx-auto"
            style={{ gridTemplateColumns: "minmax(0,1fr) 300px" }}
          >
            <div
              className="grid gap-x-7 gap-y-3 content-start"
              style={{
                gridTemplateColumns: "repeat(3,minmax(0,1fr))",
                padding: "clamp(36px,5vw,64px) clamp(24px,3vw,52px)",
              }}
            >
              {hoveredData.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.path}
                  onClick={closeAll}
                  className="font-sans text-base text-[rgba(255,255,255,0.8)] no-underline py-2 border-b border-transparent transition-colors hover:text-[#f9ac43] hover:border-[rgba(249,172,67,0.3)]"
                >
                  {child.label}
                </Link>
              ))}
            </div>
            <div
              className="flex flex-col gap-4 bg-[rgba(3,13,21,0.6)] border-l border-[rgba(175,208,222,0.11)]"
              style={{ padding: "clamp(36px,5vw,64px) clamp(24px,3vw,44px)" }}
            >
              <span className="text-[10px] tracking-[0.28em] text-[rgba(255,255,255,0.4)] uppercase">Featured</span>
              {(hoveredData.featured || []).map((feat) => (
                <Link
                  key={feat.title}
                  href={feat.path}
                  onClick={closeAll}
                  className="block no-underline text-[#e2ecf0] border border-[rgba(175,208,222,0.11)] bg-[rgba(255,255,255,0.03)] overflow-hidden pb-3 transition-all hover:border-[rgba(249,172,67,0.3)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  <div className="w-full aspect-video bg-[#0c3245] overflow-hidden mb-2.5">
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      width={300}
                      height={169}
                      className="w-full h-full object-cover saturate-90"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.22em] text-[#f9ac43] uppercase px-3">{feat.tag}</span>
                  <h4 className="font-display text-base mt-1.5 mb-1 px-3" style={{ fontFamily: "var(--f-display)" }}>
                    {feat.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[rgba(255,255,255,0.6)] px-3">{feat.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile/hamburger overlay */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 z-[96] border-t border-b border-[rgba(175,208,222,0.11)] shadow-[0_20px_40px_-24px_rgba(0,0,0,0.6)] mega-panel-enter overflow-y-auto md:overflow-hidden"
          style={{
            top: 76,
            maxHeight: "85vh",
            background: "rgba(5,18,28,0.99)",
            backdropFilter: "blur(20px)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            className="flex flex-col md:grid md:h-[min(62vh,780px)]"
            style={{
              gridTemplateColumns: "minmax(220px,1fr) minmax(0,1.4fr) 320px",
            }}
          >
            {/* Categories column */}
            <div
              className="overflow-y-auto py-6 md:py-10"
              style={{ background: "rgba(5,18,28,0.8)" }}
            >
              {NAV_CONFIG.map((cat) => (
                <div key={cat.label} className={`${activeCategory === cat.label ? "is-active" : ""}`}>
                  <Link
                    href={cat.path}
                    onClick={(e) => {
                      if (cat.children) {
                        e.preventDefault();
                        setActiveCategory(cat.label);
                      } else {
                        closeAll();
                      }
                    }}
                    className={`flex items-center justify-between px-5 md:px-10 py-3 md:py-4 no-underline text-[rgba(255,255,255,0.82)] border-l-[3px] transition-all duration-180 hover:bg-[rgba(255,255,255,0.03)] hover:text-[#f9ac43] ${
                      activeCategory === cat.label
                        ? "bg-[rgba(255,255,255,0.05)] text-[#ff7b2e] border-[#2da68a]"
                        : "border-transparent"
                    }`}
                    style={{
                      fontFamily: "var(--f-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(18px,1.8vw,26px)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    <span>{cat.label}</span>
                    {cat.children && (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.4" />
                      </svg>
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Sub-links column */}
            <div className="overflow-y-auto" style={{ background: "#d8e8ef", color: "#0f2231" }}>
              {activeCatData && activeCatData.children ? (
                <div className="flex flex-col p-5 md:p-10 gap-0">
                  <Link
                    href={activeCatData.path}
                    onClick={closeAll}
                    className="inline-flex items-center gap-3 mb-4 no-underline text-[#103449]"
                    style={{
                      fontFamily: "var(--f-display)",
                      fontStyle: "italic",
                      fontSize: "clamp(24px,2.4vw,36px)",
                    }}
                  >
                    {activeCatData.label}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </Link>
                  <div className="grid gap-x-5 gap-y-1.5 grid-cols-1 sm:grid-cols-2">
                    {activeCatData.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.path}
                        onClick={closeAll}
                        className="font-sans text-sm text-[#1a1a1a] no-underline py-2.5 border-b border-[rgba(0,0,0,0.1)] transition-colors hover:text-[#2da68a]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-10 text-sm text-[rgba(0,0,0,0.5)]">Select a category to explore.</div>
              )}
            </div>

            {/* Featured column */}
            <div
              className="hidden md:flex overflow-y-auto flex-col gap-4 p-10"
              style={{ background: "#cddde6", color: "#111" }}
            >
              <span className="text-[10px] tracking-[0.28em] uppercase text-[rgba(0,0,0,0.5)]">Featured</span>
              {((activeCatData && activeCatData.featured) || NAV_CONFIG[1]?.featured || []).map((feat) => (
                <Link
                  key={feat.title}
                  href={feat.path}
                  onClick={closeAll}
                  className="block no-underline text-[#111] border border-[rgba(0,0,0,0.1)] bg-[rgba(255,255,255,0.4)] overflow-hidden pb-3 transition-all hover:border-[rgba(45,166,138,0.5)] hover:bg-[rgba(255,255,255,0.65)]"
                >
                  <div className="w-full aspect-video overflow-hidden mb-2.5">
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      width={300}
                      height={169}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.22em] text-[#7a5a14] uppercase px-3">{feat.tag}</span>
                  <h4 className="text-base mt-1.5 mb-1 px-3 text-[#111]" style={{ fontFamily: "var(--f-display)" }}>
                    {feat.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-[rgba(0,0,0,0.6)] px-3">{feat.body}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
