import React, {useState, useEffect} from "react"
import { apiWords } from '../Api';
import 'bootstrap/dist/css/bootstrap.css';
import diary from "../../images/diary.png" 
import laptop from "../../images/laptop.png" 
import puzzle from "../../images/puzzle.png"
import styles from "../Home/home.module.scss"
import {NavLink} from "react-router-dom"
import TableRow from '../../pages/Table';

import { Table } from "react-bootstrap";

export default function Home() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        fetch(apiWords)
        .then(response => response.json())
        .then(data => setWords(data));
    }, []);

return (
    <div className={styles.home}>
        <div className={styles.home__background}>
            <div className={styles.home__container}>
                <h1 className={styles.home__title}>Learn it!</h1>
                <div className={styles.home__about}>The easiest way to make and study flashcards</div>
                <button className={styles.home__button}>
                    <NavLink className={styles.home__link} to='/table'>Start</NavLink></button>
            </div>
        </div>
        <div className={styles.area} >
        </div >
        <div className={styles.home__row}>
            <div className={styles.home__column}>
                <img src={diary} alt='img'></img>
                <p>Use Our Flashcards</p>
            </div>
            <div className={styles.home__column}>
                <img src={laptop} alt='img'></img>
                <p>Make your own</p>
            </div>
            <div className={styles.home__column}>
                <img src={puzzle} alt='img'></img>
                <p>Practice with games</p>
            </div>
        </div>
        <TableRow words={words}></TableRow>
    </div>
)
}