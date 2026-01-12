// Emailing Week 1 lessons

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  duration: string;
  order: number;
}

export const emailingWeek1: Lesson[] = [
  {
    slug: "e01-estructura-base",
    title: "Estructura base de emails",
    description: "Aprende la estructura fundamental de un email profesional",
    duration: "15 min",
    order: 1,
  },
  {
    slug: "e01-agenda-y-objetivo",
    title: "Agenda y objetivo",
    description: "Cómo establecer agendas y objetivos claros",
    duration: "12 min",
    order: 2,
  },
  {
    slug: "e01-preparacion",
    title: "Preparación efectiva",
    description: "Prepárate adecuadamente para tu comunicación",
    duration: "10 min",
    order: 3,
  },
];
