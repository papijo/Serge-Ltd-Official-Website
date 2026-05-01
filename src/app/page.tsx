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
  title: { absolute: "Serge Ltd" },
  description:
    "Serge Ltd is a global consulting and technology firm. We help corporations, governments, and growing businesses build, transform, and compete — across technology, strategy, and communications.",
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
