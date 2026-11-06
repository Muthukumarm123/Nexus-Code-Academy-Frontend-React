export type ContentBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'code'; title?: string; description?: string; code: string }
  | { kind: 'callout'; tone: 'info' | 'warn' | 'tip'; title?: string; text: string }
  | { kind: 'list'; ordered?: boolean; items: string[] };

export type LessonSection = {
  heading: string;
  blocks: ContentBlock[];
};

export type QuizQuestion = {
  question: string;
  answer: string;
};

export type LessonContent = {
  id: string;
  subtitle: string;
  sections: LessonSection[];
  practice: { prompt: string; solution: string };
  quiz: QuizQuestion[];
  takeaways: string[];
};
