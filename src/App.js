import React, {useRef,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame, useThree, extend} from 'react-three-fiber'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {Backpack} from './Components/Backpack'
import DisplayPack from './Components/DisplayPack'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import TrailbreakSixty from '../src/images/REI_Trailbreak_60.png'
import Tray from './Components/Tray'
import {Controls} from './Components/Controls'

const selectedBackpack = {
  name: "REI Co-op Trailbreak 60 Pack - Men's",
  weight: "3 lbs 13 oz",
  capacity: 3661,
  image: TrailbreakSixty
}

const selectedSleepingBag = {
  name: "REI Co-op Groundbreaker 30 Sleeping Bag",
  weight: "3 lbs. 10 oz.",
  volume: 1525.59
}


function App() {
  const [capacityUnit, setCapacityUnit] = useState(false)
  const [capacityConverted, setCapacityConverted] = useState(false)

const capacityUnitDisplayText = (capacityUnit ? "liters" : "cubic inches" )
const capacity = (capacityUnit ? (Math.round(selectedBackpack.capacity /  61.024) 
  ) : selectedBackpack.capacity )

const  usedItems = [selectedSleepingBag.volume]

const used = usedItems.reduce(function(previousValue,currentValue){
  return previousValue.volume + currentValue.volume
  
})
console.log(used)
const capacityLeft = 100-(used/selectedBackpack.capacity*100).toFixed(2)

  return (<div className="App">
      <h1>Backpack Checker</h1>
      <button onClick={() => setCapacityUnit(!capacityUnit)}>Toggle Unit</button>
<h3>Your selected backpack is: {selectedBackpack.name}</h3>
<h5>which weighs: {selectedBackpack.weight}</h5>
<h5>with a total capacity of: {capacity} {capacityUnitDisplayText}</h5>
{/* <img src={selectedBackpack.image}></img> */}
<Canvas style={{
		//  background: "#171717", 
		height: '400px'
		 }}>
      <ambientLight intensity={2} />
        <Backpack/>
       <Controls/>
    </Canvas>
{/* <DisplayPack imgSrc={selectedBackpack.image} capacityLeft={capacityLeft}/> */}
<Tray/>

    </div>
  );
}

export default App;
