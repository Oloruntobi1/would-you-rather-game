import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"


class LoggedInUser extends Component{

    setAuthedUserToNull = () => {
        const { dispatch } = this.props

        dispatch(setAuthedUser(null))
    }
    render() {
        const { user } = this.props

        const { name, avatarURL, id} = user

     
            return (
           
                <Fragment>
                        {
                    this.props.authedUser === id && (
                        <div>
                            <img className="avatar" src={avatarURL} alt="logged in user"/>
                             <p>Hello, {name}</p>
                            <button onClick={this.setAuthedUserToNull}>Sign Out</button>
                        </div>
                       
                    )
                }
                </Fragment>
                
                
                       
                    
                
                   
            )
        

        
        
    }
}


function mapStateToProps({users, authedUser}, {id}){
        const user = users[id]
        return {
            user,
            authedUser
        }
  

    

}


export default connect(mapStateToProps)(LoggedInUser)