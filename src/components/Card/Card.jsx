import React, {useState} from "react";
import styles from "./Card.module.scss";
import classNames from 'classnames';


export default function Card({id, english, transcription, russian, tags, tags_json}) {
    const [clicked, setClicked] = useState(false);
    const handleChange = () => {
        setClicked(!clicked);
    };
    const clickedButton = classNames([clicked ? `${styles.clicked}`: `${styles.button}`]);
    const shownTranslation = classNames([clicked ? ` ${styles.card__translation}`: `${styles.shownTranslation}`]);
    return(
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.card__title}>{english}</div>
                <div className={styles.card__transcription}>{transcription}</div>
                <button onClick={handleChange} className={clickedButton}>Click on me</button>
                <div className={shownTranslation}>{russian}</div>
            </div>
        </div>
    )

}
