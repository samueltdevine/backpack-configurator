import React, { useState } from "react";
import "./App.css";
// import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { Backpack } from "./Components/Backpack";
import DisplayPack from "./Components/DisplayPack";
import Tray from "./Components/Tray";
import { Controls } from "./Components/Controls";
import useBackpack from "hooks/useBackpack";



function App() {
  const {backpack: selectedBackpack, itemsInBackpack: selectedItems, info: {volumeRemaining, usedVolume}} = useBackpack()
  const [capacityUnit, setCapacityUnit] = useState(false);
  const [capacityConverted, setCapacityConverted] = useState(false);

  const capacityUnitDisplayText = capacityUnit ? "liters" : "cubic inches";
  const capacity = capacityUnit
    ? Math.round(selectedBackpack.capacity / 61.024)
    : selectedBackpack.capacity;

  const usedItems = [selectedItems.volume];

  const used = usedItems.reduce(function (previousValue, currentValue) {
    return previousValue.volume + currentValue.volume;
  });

  const capacityLeft = 100 - ((usedVolume / selectedBackpack.capacity) * 100).toFixed(2);
  return (
    <div className="App">
      <h1>Backpack Checker</h1>
      <button onClick={() => setCapacityUnit(!capacityUnit)}>
        Toggle Unit
      </button>
      <h3>Your selected backpack is: {selectedBackpack.name}</h3>
      <h5>which weighs: {selectedBackpack.weight}</h5>
      <h5>
        with a total capacity of: {capacity} {capacityUnitDisplayText}
      </h5>
      <DisplayPack
        imgSrc={selectedBackpack.image}
        capacityLeft={capacityLeft}
      />
      <Tray />
    </div>
  );
}

export default App;
