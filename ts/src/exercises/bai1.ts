const complexObject = {
  javascript: {
    label: "JavaScript",
  },
  typescript: {
    label: "TypeScript",
  },
  python: {
    label: "Python",
  },
};

type ComplexObject = typeof complexObject;
type LanguageKey = keyof ComplexObject;

export {};

export const programingLanguages = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  python: "Python",
  php: "PHP",
  flutter: "Flutter",
} as const;

export type ProgramingLanguages = typeof programingLanguages["php"];