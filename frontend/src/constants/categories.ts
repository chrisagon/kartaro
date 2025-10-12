/**
 * Category metadata with colors
 * Synchronized with backend/src/services/GeminiService.js
 */

export interface CategoryMetadata {
  label: string;
  color: string;
  aliases: string[];
}

export const CATEGORY_METADATA: CategoryMetadata[] = [
  {
    label: 'Processus',
    color: '#2563eb',
    aliases: ['process', 'processus', 'processes'],
  },
  {
    label: 'Étapes',
    color: '#7c3aed',
    aliases: ['steps', 'step', 'workflow step', 'workflow steps'],
  },
  {
    label: 'Composants',
    color: '#0ea5e9',
    aliases: ['components', 'component', 'elements', 'element', 'parts', 'part'],
  },
  {
    label: 'Actions',
    color: '#10b981',
    aliases: ['actions', 'action', 'activities', 'activity', 'tasks', 'task'],
  },
  {
    label: 'Bonus et Malus',
    color: '#f97316',
    aliases: ['bonus and malus', 'bonus', 'malus', 'pros and cons', 'advantages', 'disadvantages', 'risks', 'risk'],
  },
  {
    label: 'Catégories et Critères',
    color: '#facc15',
    aliases: ['categories and criteria', 'criteria', 'category criteria', 'evaluation criteria', 'criteria category'],
  },
  {
    label: 'Lieux/Sites et Objets',
    color: '#14b8a6',
    aliases: [
      'locations/sites and things/objects',
      'locations and sites',
      'things/objects',
      'things',
      'objects',
      'locations',
      'sites',
      'places',
      'locations and objects',
      'things and objects',
    ],
  },
  {
    label: 'Personas',
    color: '#db2777',
    aliases: ['personas', 'persona', 'roles', 'role', 'characters', 'character'],
  },
  {
    label: 'Concepts',
    color: '#ef4444',
    aliases: ['concepts', 'concept', 'ideas', 'idea', 'visions', 'vision'],
  },
];

export const DEFAULT_CATEGORY_COLOR = '#6b7280';

/**
 * Get color for a category
 * @param category - Category name to find color for
 * @returns Hex color code
 */
export function getCategoryColor(category: string): string {
  const normalizedCategory = category.toLowerCase().trim();
  
  // Try exact match first
  const exactMatch = CATEGORY_METADATA.find(
    (meta) => meta.label.toLowerCase() === normalizedCategory
  );
  if (exactMatch) return exactMatch.color;
  
  // Try alias match
  const aliasMatch = CATEGORY_METADATA.find((meta) =>
    meta.aliases.some((alias) => alias.toLowerCase() === normalizedCategory)
  );
  if (aliasMatch) return aliasMatch.color;
  
  return DEFAULT_CATEGORY_COLOR;
}

/**
 * Convert hex color to RGB values
 * @param hex - Hex color code (e.g., '#2563eb')
 * @returns RGB object with r, g, b values (0-255)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 107, g: 114, b: 128 }; // Default gray
}
