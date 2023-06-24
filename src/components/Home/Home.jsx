import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import diary from "../../images/diary.png" 
import laptop from "../../images/laptop.png" 
import puzzle from "../../images/puzzle.png"
import styles from "../Home/home.module.scss"
import {NavLink} from "react-router-dom"

export default function Home() {
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
            {/* <ul className={styles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul> */}
        </div >
        <div className={styles.home__row}>
            <div className={styles.home__column}>
            <img src={diary}></img>
            <p>Use Our Flashcards</p>
            </div>
            <div className={styles.home__column}>
            <img src={laptop}></img>
            <p>Make your own</p>
            </div>
            <div className={styles.home__column}>
            <img src={puzzle}></img>
            <p>Practice with games</p>
            </div>
        </div>
    </div>
)
}