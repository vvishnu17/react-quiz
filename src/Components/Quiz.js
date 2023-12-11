import React,{useState,useCallback} from "react";
import styles from './Quiz.module.css';
import Questions from '../assets/questions';
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () =>{
    const [answers,setAnswers]=useState([]);

    const activeQuestionIndex = answers.length;
    const isQuizComplete = activeQuestionIndex === Questions.length;

    const selectAnswerHandler = useCallback(function selectAnswerHandler(answer){
        setAnswers((prevAnswers) => {return [...prevAnswers,answer]});
     },[])

    const handleSkipAnswer = useCallback(
        ()=>selectAnswerHandler(null),[selectAnswerHandler]
        )


    if(isQuizComplete)
    {
       return <Summary answers={answers}/>
    }


    return <div className={styles.quiz}>
        <Question 
        key={activeQuestionIndex} 
        index={activeQuestionIndex}
        onTimeout={handleSkipAnswer}
        onSelectAnswer={selectAnswerHandler} 
        />
    </div>
}

export default Quiz;