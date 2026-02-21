import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { Registry } from "./components/Registry";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { getActiveContent } from "./api/endpoints";
import type { ActiveContentResponse } from "./api/types";

export type ArchetypeResult = {
  name: string;
  animal: string;
  description: string;
  traits: string[];
  theme: string;
  backgroundColor: string;
  archetypeKey?: string;
  traitScores?: Record<string, number>;
  confidence?: number;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "result" | "registry">("home");
  const [archetypeResult, setArchetypeResult] = useState<ArchetypeResult | null>(null);

  const [activeContent, setActiveContent] = useState<ActiveContentResponse | null>(null);
  const [contentLoading, setContentLoading] = useState(true);
  const [contentError, setContentError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setContentLoading(true);
    setContentError(null);

    getActiveContent()
      .then((data) => {
        if (!mounted) return;
        setActiveContent(data);
      })
      .catch((err) => {
        if (!mounted) return;
        console.error("GET /content/active failed:", err);
        setContentError("Failed to load questionnaire content from the server.");
      })
      .finally(() => {
        if (!mounted) return;
        setContentLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const handleAssessmentComplete = (result: ArchetypeResult) => {
    setArchetypeResult(result);
    setCurrentPage("result");
  };

  const navigateTo = (page: "home" | "result" | "registry") => setCurrentPage(page);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />

      {currentPage === "home" && (
        <Home
          onAssessmentComplete={handleAssessmentComplete}
          onNavigate={navigateTo}
          activeContent={activeContent}
          contentLoading={contentLoading}
          contentError={contentError}
        />
      )}

      {currentPage === "result" && archetypeResult && <Result result={archetypeResult} onNavigate={navigateTo} />}

      {currentPage === "registry" && <Registry onNavigate={navigateTo} />}
    </div>
  );
}
