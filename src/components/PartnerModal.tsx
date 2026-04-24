"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useModalStore } from "@/store/useModalStore";

export function PartnerModal() {
  const { isOpen, partner, closeModal } = useModalStore();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeModal(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeModal]);

  if (!isOpen || !partner) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[rgba(3,13,21,0.92)] backdrop-blur-sm cursor-pointer"
        onClick={closeModal}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div
        className="relative z-10 max-w-2xl w-full border overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0c3245 0%, #061c28 100%)",
          borderColor: "rgba(175,208,222,0.22)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        role="dialog"
        aria-modal="true"
        aria-label={`${partner.name} biography`}
      >
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-[#6b90a0] hover:text-[#e2ecf0] transition-colors bg-[rgba(0,0,0,0.3)] border border-[rgba(175,208,222,0.11)]"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <line x1="2" y1="2" x2="12" y2="12" stroke="currentColor" strokeWidth="1.4" />
            <line x1="12" y1="2" x2="2" y2="12" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>

        <div className="grid" style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)" }}>
          {/* Photo */}
          <div className="aspect-[4/5] relative overflow-hidden">
            <Image
              src={partner.photo}
              alt={partner.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 50vw, 280px"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4 p-8">
            <div className="border-b pb-4" style={{ borderColor: "rgba(175,208,222,0.11)" }}>
              <h3
                className="text-[#e2ecf0] mb-1"
                style={{
                  fontFamily: "var(--f-display)",
                  fontSize: "clamp(20px,2vw,28px)",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                {partner.name}
              </h3>
              <p
                className="text-xs text-[#f9ac43] uppercase"
                style={{ letterSpacing: "0.16em" }}
              >
                {partner.role}
              </p>
            </div>
            <p className="text-sm text-[rgba(226,236,240,0.8)] leading-relaxed">
              {partner.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
