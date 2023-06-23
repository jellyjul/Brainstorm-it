import React from "react";
import styles from "../TableRow/tablerow.module.scss"
import cards from '../../data/table-row.json';


export default function TableLine ({id, english, transcription, russian, tags, tags_json}){
    return (
        <div className={styles.table__tablewrap}>
        <div className={styles.table__words}>
        <div  className={styles.table__word}>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
            <div>{tags}</div>
            <div></div>
            <div></div>
        </div>
        </div>
    )
}
