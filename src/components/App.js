import React, { Component, Fragment } from "react";
import "../App.css";
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";
import { Route } from "react-router-dom";
import { handleInitialData } from "../actions/shared";
import LeaderBoardPage from "./LeaderBoardPage";
import AddQuestionPage from "./AddQuestionPage";
import Dashboard from "./Dashboard";
import QuestionDetailsPage from "./QuestionDetailsPage";
import SignInUser from "./SignInUser";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;
    if (authedUser === null) {
      return (
        <Fragment>
          <LoadingBar />
          <Nav />
          <SignInUser />
        </Fragment>
      );
    }
    return (
      <div className="App">
        
        <LoadingBar />
        <Nav />
        <div>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route path="/add" component={AddQuestionPage} />
          <Route
            path="/question/:question_id"
            component={QuestionDetailsPage}
          />
          <Route path="/leaderboard" component={LeaderBoardPage} />
        </div>
       
        
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
