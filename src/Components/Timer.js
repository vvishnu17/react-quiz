import React , {useState,useEffect,useRef} from "react";
import styles from './Timer.module.css';

const Timer = ({timeout,onTimeout}) => {

    const [remainingTime,setRemainingTime] = useState(timeout);
    const timer = useRef();
    const interval = useRef();

    useEffect(()=>{
       // console.log('SETTING TIMEOUT')
        timer.current = setTimeout(()=>{
            onTimeout(null)
        },timeout)
         return ()=>{clearTimeout(timer.current)}
        },[timeout,onTimeout]);

    useEffect(()=>{
      //  console.log('SETTING INTERVAL')
        interval.current = setInterval(()=>{
            setRemainingTime((prevState)=>prevState-1000)
        },1000)
        return ()=>{clearInterval(interval.current)}
    },[]);

    return <progress className={styles.progress} max={timeout/1000} value={remainingTime/1000} />
}

export default Timer;