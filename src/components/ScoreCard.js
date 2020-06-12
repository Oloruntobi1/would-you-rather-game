import React from "react"

function ScoreCard (props){

    return (
        <div>
            <img src={props.imgURL} alt="the person with the score"/>
            <p>{props.name} </p>
            <p>{props.answersLength}</p>
            <p>{props.questionsLength}</p>
            <p>{props.totalScore}</p>
        </div>
    )

}

export default ScoreCard