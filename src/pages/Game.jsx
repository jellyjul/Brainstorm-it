import React, { useState } from "react";
import Card from "../components/Card/Card";
import styles from "../styles/game.module.scss"
import cards from "../data/table-row.json"

export default function Game(){

const [position,setPosition] = useState(0)

const onShowPrevious = () => {
    if (position > 0) {
        setPosition(position-1)
    }
}

const onShowNext = () => {
    setPosition(position+1)
}

    return(
        <div className={styles.game}>
        <div className= {styles.game__container}>
            <button className={styles.game__button} onClick={onShowPrevious} >PREVIOUS</button>
            <div className={styles.container}>
                {cards.map((card,id )=>
                    <Card 
                    id={id} 
                    english={card.english} 
                    transcription= {card.transcription} 
                    russian = {card.russian}
                    tags = {card.tags}
                    tags_json = {card.tags_json} />)}
            </div>
            <button className={styles.game__button} onClick={onShowNext}>NEXT</button>
            
        </div>
        <div className={styles.game__learnt}>Words learnt: / </div>
        <div className={styles.game__swiper}>
        </div>
        </div>
)}
    
    