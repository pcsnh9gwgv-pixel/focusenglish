"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  loadLessonProgress,
  markLessonCompleted,
  unmarkLessonCompleted,
} from "@/lib/lesson-progress";

export function LessonCompletionBar({
  slug,
  title,
}: {
  slug: string;
  title?: string;
}) {
  const [completedMap, setCompletedMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const state = loadLessonProgress();
    setCompletedMap(state.completed ?? {});
  }, []);

  const isCompleted = useMemo(() => Boolean(completedMap?.[slug]), [completedMap, slug]);

  function onToggle() {
    const next = isCompleted ? unmarkLessonCompleted(slug) : markLessonCompleted(slug);
    setCompletedMap(next.completed ?? {});
  }

  return (
    <div className="rounded-[14px] border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-black text-[var(--fe-ink)]">
            {isCompleted ? "Lección completada" : "Marcar progreso"}
          </div>
          <div className="mt-1 text-sm text-[var(--fe-slate)]">
            {title ? (
              <>
                <span className="font-extrabold text-[var(--fe-ink)]">{title}</span>
                <span className="text-slate-300"> · </span>
              </>
            ) : null}
            {isCompleted
              ? "Ya cuenta para tu progreso."
              : "Cuando termines, márcala como completada."}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge tone={isCompleted ? "active" : "locked"}>
            {isCompleted ? "Completada" : "Pendiente"}
          </Badge>

          <Button
            type="button"
            variant={isCompleted ? "secondary" : "primary"}
            onClick={onToggle}
          >
            {isCompleted ? "Desmarcar" : "Marcar como completada"}
          </Button>
        </div>
      </div>
    </div>
  );
}
