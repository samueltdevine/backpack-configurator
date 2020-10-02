import React from 'react'
import {Backpacks, SleepingBags} from '../Items'

const Tray = () =>{



    return <div className="trayContainer">
        {SleepingBags.map((item)=>{
           return <div className="trayItem">
                <h5>{item.name}</h5>
                <div className="trayImage"  style={{backgroundImage: `url(${item.image})`}} />
            </div>
        })}
    </div>
}

export default Tray