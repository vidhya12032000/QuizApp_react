import React, { useContext } from 'react'
import UserContext from './UserContext';
import questions from '../data/questions.json'

const Result = () => {

  const{userName,score} = useContext(UserContext);
  return (
    <div>

        <h1>Result</h1>
        <h2>Congrats {userName} you got {score} out of {questions.length} </h2>

    </div>
  )
}

export default Result