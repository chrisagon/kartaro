// src/constants/backgrounds.ts
// Collection-level backgrounds for card decks

export interface CollectionBackground {
  id: string;
  label: string;
  description?: string;
  background: string; // CSS background value (can be a color or gradient)
}

export const COLLECTION_BACKGROUNDS: CollectionBackground[] = [
  {
    id: 'neutral-paper',
    label: 'Papier neutre',
    description: 'Fond discret blanc cassé, adapté à tous les contenus.',
    background: 'linear-gradient(135deg, #f9fafb 0%, #e5e7eb 100%)',
  },
  {
    id: 'light-grid',
    label: 'Quadrillage léger',
    description: 'Quadrillage très léger pour un aspect whiteboard.',
    background:
      'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0) 0 0 / 22px 22px, #f8fafc',
  },
  {
    id: 'blue-process',
    label: 'Processus (bleu)',
    description: 'Fond bleu doux inspiré de la catégorie Processus.',
    background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
  },
  {
    id: 'purple-steps',
    label: 'Étapes (violet)',
    description: 'Fond violet léger pour les workflows en plusieurs étapes.',
    background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
  },
  {
    id: 'cyan-components',
    label: 'Composants (cyan)',
    description: 'Fond cyan très clair pour les architectures et composants.',
    background: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
  },
  {
    id: 'green-actions',
    label: 'Actions (vert)',
    description: 'Fond vert pastel pour les actions et activités.',
    background: 'linear-gradient(135deg, #ecfdf3 0%, #bbf7d0 100%)',
  },
  {
    id: 'orange-bonus-malus',
    label: 'Bonus / Malus (orange)',
    description: 'Fond orangé léger pour avantages et inconvénients.',
    background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
  },
  {
    id: 'yellow-criteria',
    label: 'Critères (jaune)',
    description: 'Fond jaune pâle pour catégories et critères.',
    background: 'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
  },
  {
    id: 'teal-places-objects',
    label: 'Lieux / Objets (vert d\'eau)',
    description: 'Fond vert d\'eau doux pour lieux, sites et objets.',
    background: 'linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)',
  },
  {
    id: 'pink-personas',
    label: 'Personas (rose)',
    description: 'Fond rosé pour les personas et rôles.',
    background: 'linear-gradient(135deg, #fdf2ff 0%, #fce7f3 100%)',
  },
  {
    id: 'red-concepts',
    label: 'Concepts (rouge)',
    description: 'Fond rouge très atténué pour les idées et concepts.',
    background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
  },
];

export function getCollectionBackground(backgroundId?: string): string {
  const fallback = COLLECTION_BACKGROUNDS[0]?.background || '#f9fafb';
  if (!backgroundId) {
    return fallback;
  }

  const bg = COLLECTION_BACKGROUNDS.find((b) => b.id === backgroundId);
  return bg?.background || fallback;
}
