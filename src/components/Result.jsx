import React, { useContext } from 'react'
import UserContext from './UserContext';
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom';

const Result = () => {

  const{userName,score} = useContext(UserContext);
  let navigategir=useNavigate();
  return (
    <div>

        <h1>Result</h1>
        <h2>Congrats {userName} you got {score} out of {questions.length} </h2>

        <button onClick={()=>navigate('/')}>Go Home</button>

    </div>
  )
}

export default Result