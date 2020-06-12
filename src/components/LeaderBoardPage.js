import React, {Component} from "react"
import ScoreCard from "./ScoreCard"
import { connect } from "react-redux"

class LeaderBoard extends Component{
    render () {
        const newUsers = this.props.user.map((user) => {
            user.totalScore = Object.keys(user.answers).length + user.questions.length
            return {...user}
        })

        

        // console.log(newUsers)
        const newNewUsers= newUsers.sort((a, b) => b.totalScore - a.totalScore)
        // console.log(newNewUsers)
        return (
            <div>
                {
                    newNewUsers.map((user) => (
                        <ScoreCard
                        key={user.id}
                        imgURL={user.avatar}
                        name={user.name}
                        answersLength={Object.keys(user.answers).length}
                        questionsLength={user.questions.length}
                        totalScore={user.totalScore}
                         />
                    ))
                }
            </div>
        )
    }
}


function mapStateToProps({users}) {

 
    return {
      user: Object.values(users)
    }
  }

export default connect(mapStateToProps)(LeaderBoard)

