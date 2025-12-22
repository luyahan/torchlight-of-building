import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BuilderLayout } from "../components/builder/BuilderLayout";
import { CalculationsSection } from "../components/builder/CalculationsSection";
import { ConfigurationSection } from "../components/builder/ConfigurationSection";
import { DivinitySection } from "../components/builder/DivinitySection";
import { EquipmentSection } from "../components/builder/EquipmentSection";
import { HeroSection } from "../components/builder/HeroSection";
import { PactspiritSection } from "../components/builder/PactspiritSection";
import { SkillsSection } from "../components/builder/SkillsSection";
import { TalentsSection } from "../components/builder/TalentsSection";
import type { ActivePage } from "../lib/types";
import { useBuilderActions } from "../stores/builderStore";

export const Route = createFileRoute("/builder")({
  component: BuilderPage,
  validateSearch: (
    search: Record<string, unknown>,
  ): { id: string | undefined } => ({
    id: typeof search.id === "string" ? search.id : undefined,
  }),
});

function BuilderPage(): React.ReactNode {
  const navigate = useNavigate();
  const { id: saveId } = Route.useSearch();

  const { loadFromSave } = useBuilderActions();
  const [mounted, setMounted] = useState(false);
  const [activePage, setActivePage] = useState<ActivePage>("equipment");

  useEffect(() => {
    setMounted(true);

    if (saveId === undefined) {
      navigate({ to: "/", replace: true });
      return;
    }

    const success = loadFromSave(saveId);
    if (!success) {
      navigate({ to: "/", replace: true });
    }
  }, [saveId, navigate, loadFromSave]);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6">
        <div className="text-zinc-400">Loading...</div>
      </div>
    );
  }

  return (
    <BuilderLayout activePage={activePage} setActivePage={setActivePage}>
      {activePage === "equipment" && <EquipmentSection />}
      {activePage === "talents" && <TalentsSection />}
      {activePage === "skills" && <SkillsSection />}
      {activePage === "hero" && <HeroSection />}
      {activePage === "pactspirit" && <PactspiritSection />}
      {activePage === "divinity" && <DivinitySection />}
      {activePage === "configuration" && <ConfigurationSection />}
      {activePage === "calculations" && <CalculationsSection />}
    </BuilderLayout>
  );
}
