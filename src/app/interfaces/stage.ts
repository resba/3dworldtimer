export interface Stage {
  starClaimed: number; // not in import
  world: string;
  level: string;
  name: string;
  character: string;
  stars: string;
  starCount: number;
  order: number;
  catSuit: boolean;
  warpPipe: boolean;
  starLimit?: number;
  notes: string;
  change?: number; // change stuff, not in import
  completed: boolean; // not in import
}
