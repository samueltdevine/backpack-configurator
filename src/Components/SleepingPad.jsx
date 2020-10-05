import React from 'react'
import useItems from 'hooks/useItems'
import useBackpack from 'hooks/useBackpack'


export const SleepingPadRender = () =>{
    const {itemsInBackpack} = useBackpack()
    const externalBag = itemsInBackpack.filter(item => {if(item.type === 'sleepingPad' && item.externalStorage === true){return item}})
   return (externalBag.length === 0 ? null : <img className="sleepingPad" src={externalBag[0].externalImage}/>)
console.log(externalBag)    
return null
}