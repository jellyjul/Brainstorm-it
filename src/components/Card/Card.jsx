import React, {useEffect, useRef} from "react";
import styles from "./Card.module.scss";
import classNames from 'classnames';


export default function Card(props) {

    const {english, transcription, russian, clickedTranslate, handleChange, animation} = props;

    const classCard = classNames(styles.container, animation ? styles.animation : "")

    const focusBtn = useRef(null);
    useEffect (() => {
        focusBtn.current.focus();
    }, [english])


    // const clickedButton = classNames([clicked ? `${styles.clicked}`: `${styles.button}`]);
    // const shownTranslation = classNames([clicked ? ` ${styles.card__translation}`: `${styles.shownTranslation}`]);
    // const clickedButton = classNames([isTranslateShow ? `${styles.clicked}`: `${styles.button}`]);
    // const shownTranslation = classNames([isTranslateShow ? ` ${styles.card__translation}`: `${styles.shownTranslation}`]);
    
    return (
        <div className={classCard}>
            <div className={styles.card}>
                <div className={styles.card__title}>{english}</div>
                <div className={styles.card__transcription}>{transcription}</div>
                {/* <button onClick={handleChange} className={clickedButton}>Click on me</button>
                <div className={shownTranslation}>{russian}</div> */}
                <div onClick = {handleChange} className={styles.translate}>
                {clickedTranslate 
                ? <div className={styles.card__title}>{russian}</div>
                : <button ref={focusBtn} className={styles.button}>Show translation</button>
                }
            </div>
            </div>
        </div>
    )
}
Card.defaultProps = {
    english : "Sorry, there are no words",
    transcription : "",
    russian :  "",
    clickedTranslate  :  ""
}


