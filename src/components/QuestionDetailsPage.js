import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { handleSaveQuestionAnswer } from "../actions/questions"
import { handleInitialData } from "../actions/shared"

class QuestionDetailsPage extends Component{

    state={
        answer: ""
    }
    
    handleChange = ( e ) => {
        const {name, value } = e.target

        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const {dispatch, qid, authedUser } = this.props

        const { answer } = this.state

        dispatch(handleSaveQuestionAnswer({
            qid,
            authedUser,
            answer
        }))
        
        dispatch(handleInitialData())
    }

   
    render () {
       
        const author = this.props.userz.filter((user) => {
            if(user.questions.includes(this.props.qid)){
                return user.name
            }
           
        })

       
        const answerz = this.props.userz.filter((user) => {
           return Object.keys(user.answers).includes(this.props.qid) && user.id === this.props.authedUser
            
        })

        console.log(answerz)
        console.log(author)
        console.log(this.props.question)

        
       
        return (
           
           <div>
               <p>Asked by {author[0].name}</p>
               <img 
               src={author[0].avatarURL}
               alt="The author of the question"
               />
               <p>Would you rather...</p>
              
                    {
                        answerz.length > 0 
                        ?  
                        <Fragment>
                               <p>Results</p>
                        
                        <form >

                        <label>
                             <input 
                                 type="radio" 
                                 name="answer"
                                 value="optionOne"
                                defaultChecked={answerz[0].answers[this.props.qid] === 'optionOne'}
                             /> {this.props.question.optionOne.text}
                         </label>
         
                         <label>
                             <input 
                                 type="radio" 
                                 name="answer"
                                 value="optionTwo"
                                 defaultChecked={answerz[0].answers[this.props.qid] === 'optionTwo'}
                                
                             /> {this.props.question.optionTwo.text}
                         </label>
         
         
                        </form>
                        </Fragment>
                     
                        :
                        <Fragment>
                                <form onSubmit={this.handleSubmit}>

                                <label>
                                    <input 
                                        type="radio" 
                                        name="answer"
                                        value="optionOne"
                                        checked={this.state.answer === "optionOne"}
                                        onChange={this.handleChange}
                                    /> {this.props.question.optionOne.text}
                                </label>

                                <label>
                                    <input 
                                        type="radio" 
                                        name="answer"
                                        value="optionTwo"
                                        checked={this.state.answer === "optionTwo"}
                                        onChange={this.handleChange}
                                    /> {this.props.question.optionTwo.text}
                                </label>

                                <input type="submit" value="Submit" />

                                </form>
                        </Fragment>
                     
                    }
              

              

            </div>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, props){

    const { question_id } = props.match.params

    return {
        qid: question_id,
        authedUser,
        question: questions[question_id],
        userz: Object.values(users)
    }

}


export default connect(mapStateToProps)(QuestionDetailsPage)