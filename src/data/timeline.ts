import type { TimelineEntry } from '@/types/timeline.types';

/**
 * Career and project timeline data.
 *
 * Add entries in reverse chronological order (newest first).
 * The Timeline scene renders this array; no component needs to change
 * when entries are added, removed, or reordered.
 *
 * To attach a long-form article to an entry, create a Markdown file at
 * src/assets/markdown/timeline/<filename>.md and set `markdownFile`.
 *
 * Example entry:
 * {
 *   id:           'role-Technical-director-2022',
 *   title:        'Technical Director',
 *   organization: 'Studio Name',
 *   startDate:    '2022-01',
 *   isCurrent:    true,
 *   category:     'role',
 *   summary:      'Led creative direction for a narrative action RPG.',
 *   markdownFile: 'role-game-director-2022.md',
 *   tags:         ['RPG', 'Narrative', 'Unreal Engine'],
 *   featured:     true,
 * },
 */
export const timeline: TimelineEntry[] = [];
