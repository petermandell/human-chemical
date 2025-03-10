'use client';

import { Button } from '@/components/ui/button';
import {
  SidebarContent,
} from '@/components/ui/sidebar';
import { usePanel } from '@/hooks/use-panel';
import { SmilesSvgRenderer } from 'react-ocl';

export interface MoleculeVisualizerResponse {
  found: boolean;
  smile: {
    LogP: number;
    SMILES: string;
    TPSA: number;
    formula: string;
    hbond_acceptors: number;
    hbond_donors: number;
    num_atoms: number;
    num_bonds: number;
    rotatable_bonds: number;
    weight: number;
  }
}

export interface ContentSidebarProps {

}

export const ContentSidebar = () => {
  const { isOpen, setIsOpen, smiles } = usePanel();

  return (
    <div style={{
      width: isOpen ? 500 : 0,
    }} className="fixed top-0 right-0 bg-gray-50 z-10 overflow-x-hidden duration-500 font-bold flex flex-col justify-center items-center h-full w-0">
      <div className="w-full flex flex-row justify-end p-4">
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </div>
      <SidebarContent>
        <SmilesSvgRenderer label={smiles} smiles={smiles} />
      </SidebarContent>
    </div>
  );
}