import React from "react";
import Card from "../components/Card/Card";
import styles from "../styles/game.module.scss"
import cards from "../data/table-row.json"

export default function Game(){
    return(
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
    )
}
    

