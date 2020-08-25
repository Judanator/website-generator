import React from 'react'
import './FoodDescription.css'

const FoodDescription = (props) => {
    return (
        <div className="businessMissionDiv">
            <p className="businessMission">{props.businessMission}</p>
        </div>
    )
}

export default FoodDescription
