import type { ContentBlock, LessonSection } from './types';

export function wordCount(blocks: ContentBlock[]): number {
  return blocks.reduce((sum, b) => {
    if (b.kind === 'p' || b.kind === 'h3' || b.kind === 'callout') return sum + b.text.split(/\s+/).length;
    if (b.kind === 'list') return sum + b.items.join(' ').split(/\s+/).length;
    if (b.kind === 'code') return sum + (b.description || '').split(/\s+/).length;
    return sum;
  }, 0);
}

export function sectionWordCount(section: LessonSection): number {
  return wordCount(section.blocks);
}

export function lessonWordCount(sections: LessonSection[]): number {
  return sections.reduce((sum, s) => sum + sectionWordCount(s), 0);
}
