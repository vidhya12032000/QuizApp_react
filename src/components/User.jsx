import React, { useContext, useState } from 'react'
import UserContext from './UserContext'

const User = () => {
    const{setPage,setUsername}=useContext(UserContext);
    const[name,setName]=useState("");

    function startQuiz(){

        if(name.trim()==""){
            return alert("Enter a valid Name")
        }
       setPage("quiz");
       setUsername(name)
    }
  return (
    <div>
        

        <h1> Quiz App</h1>
        <input  type='text' placeholder='Enter your Name' value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default User