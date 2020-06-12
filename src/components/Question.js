import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"


class Question extends Component {

   

        render ()
         {
            const {  crafter } = this.props

            const { name, avatarURL } = crafter
            return (

                <div>
                    <img 
                        src={avatarURL}
                        alt="The author of the question"
                    />
                    
                    <p>{name} asks: </p>
                    <p>Would you rather</p>
                    <p>...{this.props.optionOne}...</p>
                    <Link to={`/question/${this.props.id}`}>
               
                 View Poll

            </Link>
                </div>
                
            )
        }

    }


function mapStateToProps({users}, {author}){

    const crafter = users[author]

    return {
        crafter
    }

}

export default connect(mapStateToProps)(Question)


