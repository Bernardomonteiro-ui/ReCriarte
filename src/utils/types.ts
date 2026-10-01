export type DrawingName =
  | 'hinge' | 'slide' | 'piston' | 'kitchen' | 'closet'
  | 'exploded' | 'custom' | 'bedroom' | 'handle' | 'edge';

export type PlanejadoMode = 'line' | 'solid' | 'worn' | 'new';

export type Art =
  | { kind: 'planejado'; mode?: PlanejadoMode; dims?: boolean }
  | { kind: 'drawing'; name: DrawingName };
