import React, {Component} from "react"
import { connect } from "react-redux"
import { handleAddQuestion } from "../actions/questions"
import { Redirect } from 'react-router-dom'
import { handleInitialData } from "../actions/shared";


class NewQuestion extends Component{
    state = {
            optionOneText: '',
            optionTwoText: '',
            author: this.props.author,
            toHome: false
    }

    handleChange = (e) => {
        const { name, value} = e.target

       this.setState(() => ({
        
                [name]: value
            
        }))

    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { ...question} = this.state
        const { dispatch } = this.props


        dispatch(handleAddQuestion(question))

        this.setState(() => ({
               optionOneText: '',
               optionTwoText: '',
               toHome: true
            
        }))

        dispatch(handleInitialData())
    }
    render(){

        const { toHome, optionOneText, optionTwoText} = this.state
        
        if (toHome === true) {
            return <Redirect to='/' />
          }

       
        return (
            <div>
                <h3>Create new Question</h3>
                <p>Complete the question</p>

                <p>Would you rather...</p>
                {/* <form onSubmit={this.handleSubmit}> */}
                <form onSubmit={this.handleSubmit}>
                   
                   <input
                   type="text"
                   placeholder="Enter Option One Here"
                   value={optionOneText}
                   name="optionOneText"
                   onChange={this.handleChange}
                   />
                   <p>-----OR------</p>
                   <input 
                   type="text"
                   placeholder="Enter Option Two Here"
                   value={optionTwoText}
                   name="optionTwoText"
                   onChange={this.handleChange}
                   />


                    <button 
                    type="submit"
                    >
                        Submit
                    </button>


                </form>
            </div>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
      author: authedUser
    }
  }

export default connect(mapStateToProps)(NewQuestion)