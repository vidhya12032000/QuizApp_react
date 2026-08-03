import { useState } from 'react'

import './index.css'
import UserContext from './components/UserContext';
import User from './components/User';
import QuizPage from './components/QuizPage';
import Result from './components/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 
const[userName,setUsername]=useState("");
const[score,setScore]=useState(0);
// const[page,setPage]=useState("user");

  return (
    <>
   <BrowserRouter>
   
   
    <UserContext.Provider  value={{userName,setUsername,score,setScore}} >

      {/* {page=="user"&& <User/> }
      {page=="quiz"&& <QuizPage/> }
      {page=="result"&& <Result/> } */}
<Routes>

  <Route path='/' element={<User/>} />
  <Route path='/quiz' element={<QuizPage/>} />
  <Route path='/result' element={<Result/>} />
</Routes>


    </UserContext.Provider>
    
    </BrowserRouter>
    </>
  )
}

export default App
