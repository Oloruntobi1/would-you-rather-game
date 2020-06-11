import React, { Component } from 'react';
import '../App.css';
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading"
// import Nav from "./Nav"
import { Route } from "react-router-dom"
import { handleInitialData } from "../actions/shared"


class App extends Component{
  

  componentDidMount(){
      const { dispatch } = this.props
      dispatch(handleInitialData())
  }
  render () {
    const { authedUser } = this.props
      if(authedUser === null){
        return ( 
          <p>Sign In</p>
        )
      }
    return (
        <div className="App">
          Show Me
        </div>
    )
  }
}



function mapStateToProps({authedUser}) {

  return {
    authedUser
  }


}

export default connect(mapStateToProps)(App)


