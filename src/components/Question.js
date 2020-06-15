import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"


function Question (props){

   

        
            const {  crafter } = props

            const { name, avatarURL } = crafter
            return (

                <div>
                    <img 
                    className="avatar"
                        src={avatarURL}
                        alt="The author of the question"
                    />
                    
                    <p>{name} asks: </p>
                    <p>Would you rather</p>
                    <p>...{props.optionOne}...</p>
                    <Link to={`/questions/${props.id}`}>
               
               <button className="poll-btn"> View Poll</button>
                

            </Link>
                </div>
                
            )
       
    }


function mapStateToProps({users}, {author}){

    const crafter = users[author]

    return {
        crafter
    }

}

export default connect(mapStateToProps)(Question)


