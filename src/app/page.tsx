import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsBar } from "@/components/sections/StatsBar";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { ClientRoster } from "@/components/sections/ClientRoster";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { EngagementsSection } from "@/components/sections/EngagementsSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { CommandingCTA } from "@/components/sections/CommandingCTA";

export const metadata: Metadata = {
  title: "SERGE | Brilliantly evolve",
  description:
    "SERGE is a sovereign advisory practice for executives, boards, and government — guiding institutions through decisions that endure.",
  alternates: { canonical: "https://weareserge.com" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <EditorialSection />
      <ClientRoster />
      <ManifestoSection />
      <CapabilitiesSection />
      <EngagementsSection />
      <PrinciplesSection />
      <CommandingCTA />
    </>
  );
}
