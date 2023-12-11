import React from "react";
import Logo from '../assets/quiz-logo.png';
import styles from './Header.module.css';

const Header = () =>{
    return <header className={styles.header}>
        <img src={Logo} alt="Quiz-Logo" />
        <h1>React Quiz</h1>
    </header>
}

export default Header;