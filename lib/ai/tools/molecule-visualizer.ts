import { tool } from 'ai';
import { z } from 'zod';
import smilesData from '@/app/(chat)/api/data/smiles';

export const moleculeVisualizer = tool({
  description: 'Visualize a molecule on any mention of a SMILES string',
  parameters: z.object({
    smiles: z.string(),
  }),
  execute: async ({ smiles }) => {
    const smile = smilesData.find((item) => item.SMILES === smiles);

    // validate smiles?

    return {
      found: !!smile,
      smiles: smiles,
    };
  },
});
