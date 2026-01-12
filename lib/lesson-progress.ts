// Lesson progress tracking

export interface LessonProgress {
  slug: string;
  completed: boolean;
  score?: number;
  completedAt?: Date;
}

export interface ProgressData {
  completedSlugs: string[];
  progressMap: Record<string, LessonProgress>;
}

export function loadLessonProgress(): ProgressData {
  // In MVP, we'll load from localStorage in the client
  if (typeof window === "undefined") {
    return { completedSlugs: [], progressMap: {} };
  }

  try {
    const stored = localStorage.getItem("lessonProgress");
    const progressMap: Record<string, LessonProgress> = stored ? JSON.parse(stored) : {};
    const completedSlugs = Object.keys(progressMap).filter(slug => progressMap[slug]?.completed);
    return { completedSlugs, progressMap };
  } catch {
    return { completedSlugs: [], progressMap: {} };
  }
}

export function saveLessonProgress(slug: string, progress: LessonProgress): void {
  if (typeof window === "undefined") return;

  try {
    const { progressMap } = loadLessonProgress();
    progressMap[slug] = progress;
    localStorage.setItem("lessonProgress", JSON.stringify(progressMap));
  } catch (error) {
    console.error("Failed to save lesson progress", error);
  }
}

export function markLessonCompleted(slug: string, score?: number): void {
  saveLessonProgress(slug, {
    slug,
    completed: true,
    score,
    completedAt: new Date(),
  });
}

export function unmarkLessonCompleted(slug: string): void {
  if (typeof window === "undefined") return;

  try {
    const { progressMap } = loadLessonProgress();
    delete progressMap[slug];
    localStorage.setItem("lessonProgress", JSON.stringify(progressMap));
  } catch (error) {
    console.error("Failed to unmark lesson", error);
  }
}
