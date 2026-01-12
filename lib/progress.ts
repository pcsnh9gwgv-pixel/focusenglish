// User progress tracking

export interface UserProgress {
  streak: number;
  completedCount: number;
  sessionsThisWeek: number;
  lastActivity?: Date;
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { streak: 0, completedCount: 0, sessionsThisWeek: 0 };
  }

  try {
    const stored = localStorage.getItem("userProgress");
    return stored ? JSON.parse(stored) : { streak: 0, completedCount: 0, sessionsThisWeek: 0 };
  } catch {
    return { streak: 0, completedCount: 0, sessionsThisWeek: 0 };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("userProgress", JSON.stringify(progress));
  } catch (error) {
    console.error("Failed to save progress", error);
  }
}
