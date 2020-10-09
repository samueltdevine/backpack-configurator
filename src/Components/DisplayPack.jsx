import React from "react";
import useBackpack from "hooks/useBackpack";
import { useMemo } from "react";
import { useCallback } from "react";
import useItems from "hooks/useItems";
import { SleepingPadRender } from "Components/SleepingPad";

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

  const displayBackpack = useCallback(
    (arg) => {
      const nextBackpack =
        backpacks[backpacks.findIndex((b) => b.id === backpack.id) + arg];
      if (nextBackpack === undefined) {
        return null;
      }
      return nextBackpack.image;
    },
    [backpack]
  );

  return (
    <div className="displayPackTray">
        <button onClick={prevBackpack} className="packButton">
          {" "}
          {"<"}{" "}
        </button>
        <div
          className="nextPack"
          style={{ backgroundImage: `url(${displayBackpack(-1)})` }}
        />
      <div className="displayPackContainer">
        <SleepingPadRender />
        <img className="displayPackImg" src={imgSrc}></img>
        <img className="displayPackImgUsed" src={imgSrc}></img>
      </div>
        <div
          className="nextPack"
          style={{ backgroundImage: `url(${displayBackpack(+1)})` }}
        />

        <button onClick={nextBackpack} className="packButton">
          {" "}
          {">"}{" "}
        </button>
    </div>
  );
};

export default DisplayPack;
