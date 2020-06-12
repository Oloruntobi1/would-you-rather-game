import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import Question from "./Question"



class Dashboard extends Component{

    state = {
        toggleItem: false
    }
 
    
    render(){

        const { authedUser } = this.props

        const answeredQuestions = this.props.orderedQuestions.filter((item) => {
            return item.optionOne.votes.includes(authedUser) || item.optionTwo.votes.includes(authedUser)
        })


        const unAnsweredQuestions = this.props.orderedQuestions.filter((item) => {
            return !item.optionOne.votes.includes(authedUser) && !item.optionTwo.votes.includes(authedUser)
        })


        return (
            <div>
                
                <h3 className="center">Your Timeline</h3>

                <button
                onClick={() => {
                    this.setState({toggleItem: false})
                }}
                >UnAnswered Questions</button>

                <button
                onClick={() => {
                    this.setState({toggleItem: true})
                }}
                >
                    Answered Questions
                </button>



                {
                    this.state.toggleItem === false 
                    ? 
                    <Fragment>
                    
                    <ul>
                    {unAnsweredQuestions.map((item) => (
                        <li key={item.id}>
                        <Question 
                        id={item.id}
                        author={item.author}
                        optionOne={item.optionOne.text}
                        optionTwo={item.optionTwo.text}
                        />
                        </li>
                    ))}
                    </ul>
                    </Fragment>
                   

                    : 
                    <Fragment>

                    
                    <ul>
                    {answeredQuestions.map((item) => (
                        <li key={item.id}>
                        <Question
                        id={item.id}
                        author={item.author}
                        optionOne={item.optionOne.text}
                        optionTwo={item.optionTwo.text}
                        />
                        </li>
                    ))}
                    </ul>

                    </Fragment>
                  
                }

               
                
                
            </div>
        )
    }
}


function mapStateToProps({questions, authedUser}){

    return  {
        orderedQuestions: Object.values(questions)
                .sort((a, b) => b.timestamp -a.timestamp),
        authedUser

    }

}
export default connect(mapStateToProps)(Dashboard)