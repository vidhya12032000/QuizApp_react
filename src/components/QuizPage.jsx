import React, { useContext, useState } from 'react'
import UserContext from './UserContext'
import questions from '../data/questions.json'
import { useNavigate } from 'react-router-dom';


const QuizPage = () => {
    const{setScore,userName}=useContext(UserContext);
    const[currentQuestion,setCurrentQuestion]=useState(0);
     const [selectedAnswer, setSelectedAnswer] = useState("");
     let navigate =useNavigate();

     function handlefinish(){
// setPage("result");
if(selectedAnswer==''){
    return alert("Please Select an Option");
}

 if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }
navigate("/result")

     }
     function handlenext(){
if(selectedAnswer==''){
    return alert("Please Select an Option");
}

 if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

        setCurrentQuestion((prev)=>prev+1);
        setSelectedAnswer("");

     }

     function handleAnswer(option){

        setSelectedAnswer(option);
        
     }
  return (
    <div>
        
        <h1>Welcome {userName} </h1>
        <h4>Questions {currentQuestion+1} of {questions.length}</h4>

        <h2>{questions[currentQuestion].question}</h2>
        {
            questions[currentQuestion].options.map((option,index)=>{
                return(
                    <div key={index+1} 
                      onClick={()=>handleAnswer(option)}
                       className={
              selectedAnswer === option
                ? "selected"
                : "Not seleted"
            } >
                      <p>{option}</p>


                    </div>
                )


            })
        }

        {

            currentQuestion===questions.length-1?
            (<button onClick={handlefinish}>Finish</button>)
            :(<button onClick={handlenext}>next</button>)
        }




    </div>
  )
}

export default QuizPage