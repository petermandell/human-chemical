"use client";

import { Button } from "@/components/ui/button";
import { SidebarContent } from "@/components/ui/sidebar";
import { usePanel } from "@/hooks/use-panel";
import { SmilesSvgRenderer } from "react-ocl";
import toxicity from "@/app/(chat)/api/data/toxicity";
import ProgressBar from "@ramonak/react-progress-bar";

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
  };
}

export interface ContentSidebarProps {}

const getColor = (prob: number) => {
  if (prob >= 80) {
    return 'red';
  } else if (prob >= 40 && prob < 80) {
    return 'orange';
  } else {
    return 'green';
  }
};

export const ContentSidebar = () => {
  const { isOpen, setIsOpen, smiles } = usePanel();

  return (
    <p
      style={{
        width: isOpen ? 500 : 0,
      }}
      className="h-screen bg-gray-50 z-10 overflow-x-hidden duration-500 font-bold flex flex-col justify-center items-center w-0"
    >
      <p className="w-full flex flex-row justify-end p-4">
        <Button onClick={() => setIsOpen(false)}>Close</Button>
      </p>
      <SidebarContent className="items-center">
        {smiles && (
          <>
            <p className="text-lg text-center">{smiles}</p>
            <p
              style={{
                width: 200,
                height: 200,
                display: "flex",
                alignItems: "center",
              }}
            >
              <SmilesSvgRenderer height={200} width={200} smiles={smiles} />
            </p>
            <p className="text-md text-center">Predicted Toxicity</p>
            <table className="text-left divide-y divide-gray-200 table-fixed dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Property
                  </th>
                  <th className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                    Probability
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                {Object.keys(toxicity).map((value: string) => {
                  // @ts-ignore
                  const data = toxicity[value];

                  return (
                    <tr key={value}>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {value}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <ProgressBar isLabelVisible={false} bgColor={getColor(data.prob)} completed={data.prob} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </SidebarContent>
    </p>
  );
};
