import React from 'react'
import './DotMenu.css'

const DotMenu = () => {
    return (
        <div className="dotDiv">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
        </div>
    )
}

// <div className="dotDiv">
// <input type="radio" className="dot active"></input>
// <input type="radio" className="dot"></input>
// <input type="radio" className="dot"></input>
// </div>

export default DotMenu
