import React from "react";
import useBackpack from "hooks/useBackpack";
import { useMemo } from "react";
import { useCallback } from "react";
import useItems from "hooks/useItems";
import {SleepingPadRender} from 'Components/SleepingPad';

const DisplayPack = ({ imgSrc, capacityLeft, sleepingPad }) => {
  const { actions, backpack } = useBackpack();
  const setCapacityLeft = document.documentElement.style.setProperty(
    "--coverage",
    `${capacityLeft}%`
  );
  const { backpacks } = useItems();

  const nextBackpack = useCallback(() => {
    const nextBackpack =
      backpacks[backpacks.findIndex((b) => b.id === backpack.id) + 1];
    nextBackpack && actions.selectBackpack(nextBackpack);
  }, [backpack]);

  const prevBackpack = useCallback(() => {
    const nextBackpack =
      backpacks[backpacks.findIndex((b) => b.id === backpack.id) - 1];
    nextBackpack && actions.selectBackpack(nextBackpack);
  }, [backpack]);

  return (
    <div>
      <div className="displayPackContainer">
        <button 
          onClick={prevBackpack}
          className="packButton"> {"<"} </button>
        <SleepingPadRender/>
        <img className="displayPackImg" src={imgSrc}></img>
        <img className="displayPackImgUsed" src={imgSrc}></img>
        
        <button
          onClick={nextBackpack}
          className="packButton"
        >
          {" "}
          {">"}{" "}
        </button>
      </div>
    </div>
  );
};

export default DisplayPack;
