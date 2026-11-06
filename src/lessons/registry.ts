import type { LessonContent } from './types';

// Auto-discovered: each lesson content module default-exports a LessonContent.
// We import by lesson id so Vite bundles them statically.
import lesson_1_1 from './chapters/ch1/lesson-1-1';
import lesson_1_2 from './chapters/ch1/lesson-1-2';
import lesson_1_3 from './chapters/ch1/lesson-1-3';
import lesson_1_4 from './chapters/ch1/lesson-1-4';
import lesson_1_5 from './chapters/ch1/lesson-1-5';
import lesson_1_6 from './chapters/ch1/lesson-1-6';
import lesson_1_7 from './chapters/ch1/lesson-1-7';

const map: Record<string, LessonContent> = {
  'lesson-1-1': lesson_1_1,
  'lesson-1-2': lesson_1_2,
  'lesson-1-3': lesson_1_3,
  'lesson-1-4': lesson_1_4,
  'lesson-1-5': lesson_1_5,
  'lesson-1-6': lesson_1_6,
  'lesson-1-7': lesson_1_7,
};

export function getLessonContent(id: string): LessonContent | undefined {
  return map[id];
}
