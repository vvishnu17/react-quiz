import React,{useState} from "react";
import styles from './Question.module.css';
import Questions from '../assets/questions';
import Timer from "./Timer";
import Answer from "./Answer";

const Question = ({index,onTimeout,onSelectAnswer}) =>{

    const [answer,setAnswer] = useState({
        selectedAnswer:'',
        answerState:null,
    })

    const handleSelectAnswer = (answer) =>{
        setAnswer({
            selectedAnswer:answer,
            answerState: 'answered',
        })
        setTimeout(()=>{
            setAnswer({
                selectedAnswer:answer,
                answerState: Questions[index].answers[0] === answer?'correct':'wrong',
        })
        setTimeout(()=>{onSelectAnswer(answer)},2000)
        },1000)
    }

    return <div className={styles.question}>
        <Timer 
        timeout={15000} 
        onTimeout={answer.selectedAnswer !==''? null: onTimeout}
        />
        <h1>{Questions[index].text}</h1>
        <Answer 
        answers={Questions[index].answers} 
        selectedAnswer={answer.selectedAnswer} 
        answerState={answer.answerState} 
        onSelectAnswer={handleSelectAnswer} />
    </div>
}

export default Question;