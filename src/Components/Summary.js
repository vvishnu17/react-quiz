import React from "react";
import styles from './Summary.module.css';
import quizComplete from "../assets/quiz-complete.png";
import Questions from '../assets/questions';


const Summary = ({answers})=>{
    const skippedAnswers = answers.filter((answer) => answer === null);
    const correctAnswers = answers.filter((answer,idx) => answer === Questions[idx].answers[0]);
    const skippedAnswersRate = Math.round((skippedAnswers.length/Questions.length)*100);
    const correctAnswersRate = Math.round((correctAnswers.length/Questions.length)*100);
    const wrongAnswersRate = 100 - skippedAnswersRate - correctAnswersRate;


    return <div className={styles.summary}>
    <img src={quizComplete} alt="Trophy"/>
    <h2>Quiz Completed!</h2>
    <div className={styles.summaryStats}>
        <p className={styles.answerRate}>
            <span className={styles.number}>{skippedAnswersRate}%</span>
            <span className={styles.text}>Skipped</span>
        </p>
        <p className={styles.answerRate}> 
            <span className={styles.number}>{correctAnswersRate}%</span>
            <span className={styles.text}>Answered Correctly</span>
        </p>
        <p className={styles.answerRate}>
            <span className={styles.number}>{wrongAnswersRate}%</span>
            <span className={styles.text}>Answerted Incorrectly</span>
        </p>
    </div>
    <ol>
        {answers.map((answer,idx)=>{
            let cssClass = styles.userAnswer;
            if(answer === null)
            {
                cssClass = styles.skipped;
            }
            else if(answer === Questions[idx].answers[0])
            {
                cssClass = styles.correct;
            }
            else{
                cssClass = styles.wrong;
            }

            return <li key={answer}>
                <h3>{idx+1}</h3>
                <p className={styles.question}>{Questions[idx].text}</p>
                <p className={cssClass}>{answer ?? 'Skipped'}</p>
            </li>
        })}
    </ol>
</div>
}

export default Summary;