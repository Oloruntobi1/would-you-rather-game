import React, { Component } from "react"
import { connect } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"

class SignInUser extends Component{

    state= {
        loggedInUser: ''
    }

    handleChange = (e) => {

        const { value } = e.target
        this.setState({loggedInUser: value});
      }
      
        handleSignIn = (e) => {
      
          e.preventDefault()
      
      
          const { dispatch} = this.props
          if(this.state.loggedInUser !== ''){
            dispatch(setAuthedUser(this.state.loggedInUser))
            this.setState({loggedInUser: ''})
          }
          else {
            alert("Invalid request. You must select a user before you signing in")
          }
         
        }
    render(){

        const { loggedInUser } = this.state
        console.log(this.props.users)
        return (
            <div>
            <form onSubmit={this.handleSignIn}>
              <select value={loggedInUser} onChange={this.handleChange}>
                <option value="selectUser">Select User</option>
               {
                 this.props.users.map((item) => (
                   <option key={item.id} value={item.id}> {item.name} </option>
                 ))
               }
              </select>

              <input type="submit" value="Sign In" />
            
            </form>
             
          </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users: Object.values(users) //this will return an array and allow me to map
    }
}

export default connect(mapStateToProps)(SignInUser)