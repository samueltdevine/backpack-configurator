import React from 'react'


const DisplayPack = ({ imgSrc, capacityLeft}) =>{

    const setCapacityLeft = document.documentElement.style.setProperty('--coverage', `${capacityLeft}%`)


    return <div>
        <div className="displayPackContainer">
    <img className="displayPackImg" src={imgSrc}></img>
    <img className="displayPackImgUsed" src={imgSrc}></img>
    </div>
        </div>
}

export default DisplayPack