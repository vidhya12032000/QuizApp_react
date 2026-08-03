import { useState } from 'react'

import './index.css'
import UserContext from './components/UserContext';
import User from './components/User';
import QuizPage from './components/QuizPage';
import Result from './components/Result';

function App() {
 
const[userName,setUsername]=useState("");
const[score,setScore]=useState(0);
const[page,setPage]=useState("user");

  return (
    <>
    <UserContext.Provider  value={{userName,setUsername,score,setScore,page,setPage}} >

      {page=="user"&& <User/> }
      {page=="quiz"&& <QuizPage/> }
      {page=="result"&& <Result/> }



    </UserContext.Provider>
    
    </>
  )
}

export default App
