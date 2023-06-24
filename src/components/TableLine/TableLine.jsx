import React, {useState} from "react";
import styles from "../../styles/Table.module.scss"
import { EditFilled, DeleteFilled, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import cards from '../../data/table-row.json';


export default function TableLine ({id, english, transcription, russian, tags, tags_json}){

    const [editing, setEditing] = useState();

    const handleEdit = () => {
        setEditing(!editing);
    }


    const [state, setState] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
        tag: tags
    });

    const handleCancel = () => {
        setState();
        handleEdit();
    }

    return (
        <div className={styles.table__tablewrap}>
        <div className={styles.table__words}>
        <div  className={styles.table__word}>{english}</div>
            <div>{transcription}</div>
            <div>{russian}</div>
            <div>{tags}</div>
            <button onClick={handleEdit} className={styles.table__edit}><EditFilled /></button>
            <button className={styles.table__delete}><DeleteFilled/></button>
        </div>
        {editing 
            ? (
                <div className={styles.table__words}>
                    <input 
                    className={styles.table__word}
                    data-name="english"
                    type="text" 
                    defaultValue= {english}
                    />

                    <input 
                    className={styles.table__word}
                    data-name="transcription"
                    type="text" 
                    defaultValue= {transcription}
                    />

                    <input 
                    className={styles.table__word}
                    data-name="russian"
                    type="text" 
                    defaultValue= {russian}
                    />

                    <input 
                    className={styles.table__word}
                    data-name="tag"
                    type="text" 
                    defaultValue= {tags}
                    />

                    <div>
                        <button onClick={handleEdit}  className={styles.table__save}><CheckOutlined /></button>
                    </div>
                    <button onClick = {handleCancel} className={styles.table__cancel}>< CloseOutlined /></button>
                </div>) 
            : ""}
        </div>
    )
}
