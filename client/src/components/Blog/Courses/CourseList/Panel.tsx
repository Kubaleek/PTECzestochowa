import React from "react";
import { PanelListProps } from "./ts/paneldata";

export const Panel: React.FC<PanelListProps> = ({ panels }) => {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg md:text-xl font-bold">Szkolenia & Użytkownicy</h2>
    </div>
  );
};

export default Panel;