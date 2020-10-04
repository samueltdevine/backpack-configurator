import React from "react";
import useBackpack from "hooks/useBackpack";
import useItems from "hooks/useItems";

const Tray = () => {
  const { actions, itemsInBackpack } = useBackpack();
  const {items} = useItems();
  const { addItemToBackpack, removeItemFromBackpack } = actions;
  const itemCheck = (arr, item)=>{
   return arr.some(function(arrVal){
     return item === arrVal
   })
  }
  return (
    <div className="trayContainer">
      {items.map((item) => {
        return (
          <div
            className="trayItem"
            onClick={() => {
              (itemCheck(itemsInBackpack, item) ? removeItemFromBackpack(item.id) : addItemToBackpack(item) )}}>
            <h5>{item.name}</h5>
            <div
              className="trayImage"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tray;
