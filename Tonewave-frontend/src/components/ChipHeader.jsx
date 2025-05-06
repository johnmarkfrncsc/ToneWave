import React from "react";
import TonewaveButton from "./ui/TonewaveButton";

const ChipHeader = () => {
  return (
    <>
      <div className="flex overflow-auto bg-gradient-to-r from-slate-900 to-slate-700 pt-15 px-4 gap-2 pb-2">
        <TonewaveButton>Energize</TonewaveButton>
        <TonewaveButton>Feel good</TonewaveButton>
        <TonewaveButton>Workout</TonewaveButton>
        <TonewaveButton>Relax</TonewaveButton>
        <TonewaveButton>Party</TonewaveButton>
        <TonewaveButton>Hiphop</TonewaveButton>
      </div>
    </>
  );
};

export default ChipHeader;
