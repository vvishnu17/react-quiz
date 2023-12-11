import React,{useRef} from "react";
import styles from  './Answer.module.css'
const Answer = ({answers,selectedAnswer,answerState,onSelectAnswer}) =>{

    const shuffledAnswers = useRef();
    if(!shuffledAnswers.current){
        shuffledAnswers.current = [...answers]
        shuffledAnswers.current.sort(()=> Math.random()-0.5);
    }

    return (
        <ul className={styles.answers}>
        {shuffledAnswers.current.map((answer)=>{
            const isSelected = (answer === selectedAnswer);
            let cssClass = '';
            if(isSelected && (answerState ==='answered')){
                cssClass =styles.selected;
            }
            if(isSelected && answerState === 'correct')
                cssClass = styles.correct;
            if(isSelected && answerState === 'wrong')
                cssClass = styles.wrong;


        return (<li key={answer} className={styles.answer} >
            <button 
            onClick={()=>onSelectAnswer(answer)} 
            className={cssClass}
            disabled= {answerState !== null} >{answer}</button>
            </li>)
            }
            )
        }
    </ul>
    )

}

export default Answer;