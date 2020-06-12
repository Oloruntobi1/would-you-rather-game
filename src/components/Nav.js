import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import LoggedInUser from "./LoggedInUser"

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {
        this.props.showSignedIn !== true && 
       
        this.props.userIds.map((id) => (
                    
          <LoggedInUser key={id} id={id}/>
         
      ))
      }
          
      
   
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({users, authedUser}){

 
  return {
   
    showSignedIn : authedUser === null,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(Nav);
