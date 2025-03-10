import { tool } from 'ai';
import { z } from 'zod';

export const moleculeVisualizer = tool({
  description: 'Visualize a molecule on any mention of a SMILES string',
  parameters: z.object({
    smiles: z.string(),
  }),
  execute: async ({ smiles }) => {
    return {
      smiles: smiles,
    };
  },
});

