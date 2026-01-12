// Badge system for tracking user progress

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
}

export function computeEmailingBadges(completedSlugs: string[]): Badge[] {
  const badges: Badge[] = [
    {
      id: "first-lesson",
      name: "First Steps",
      description: "Complete your first lesson",
      icon: "🌟",
      earned: completedSlugs.length >= 1,
    },
    {
      id: "week-one",
      name: "Week Warrior",
      description: "Complete 7 lessons",
      icon: "🔥",
      earned: completedSlugs.length >= 7,
    },
    {
      id: "consistency",
      name: "Consistent Learner",
      description: "Complete 14 lessons",
      icon: "💪",
      earned: completedSlugs.length >= 14,
    },
    {
      id: "master",
      name: "Email Master",
      description: "Complete all lessons",
      icon: "🏆",
      earned: completedSlugs.length >= 21,
    },
  ];

  return badges;
}
