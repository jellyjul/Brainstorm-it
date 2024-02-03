import React, {useState} from "react";
import styles from "../../styles/Table.module.scss"
import { EditFilled, DeleteFilled, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import cards from '../../data/table-row.json';
import classNames from "classnames";


export default function TableLine (props){

    const {english, transcription, russian, tags} = props

    const [editing, setEditing] = useState();
    const [state, setState] = useState({
        english: english,
        transcription: transcription,
        russian: russian,
        tag: tags
    });
    const [errors, setErrors] = useState({
        english: false,
        transcription: false,
        russian: false,
        tag: false
    });

    const handleEdit = (e) => {
        setEditing(!editing);
    }
    const handleCancel = () => {
        setState({
            ...props,
        });
        handleEdit();
        setErrors(false)
    }


    const handleChangeInput = (e) => {
        if (e.target.dataset.name==='english' && e.target.value.match(/[а-яА-Я]/g)) {
            alert("Please use English letters only");
        }

        if (e.target.dataset.name==='russian' && e.target.value.match(/[a-zA-Z]/g)) {
            alert("Please use Cyrillic alphabet only");
        }

        setErrors({
            ...errors,
            [e.target.dataset.name]: false,
        })
        setState({
            ...state,
            [e.target.dataset.name]: e.target.value,
        });

        validate(e.target);
    }

    const validate = (input) => {
        if (input.value === "") {
            throwError(input);
        }
    }

    const throwError = (input) => {
        setErrors({
            ...errors,
            [input.dataset.name]: true,
        })
        // console.log(errors)
        // console.log(input.dataset.name)
    }

    const validateFlag = !errors.english && !errors.transcription && !errors.russian && !errors.tag;

    const errorInputEnglish = classNames(errors.english ? styles.error : "");
    const errorInputTranscription = classNames(errors.transcription ? styles.error : "");
    const errorInputRussian = classNames(errors.russian ? styles.error : "");
    const errorInputTag = classNames(errors.tag ? styles.error : "");


    return (
        <div className={styles.table__tablewrap}>
            <div className={styles.table__words}>
                <div  className={styles.table__word}>{errors.english ? 'Пустое поле' : state.english}</div>
                <div>{errors.transcription ? 'Пустое поле' : state.transcription}</div>
                <div>{errors.russian ? 'Пустое поле' : state.russian}</div>
                <div>{errors.tag ? 'Пустое поле' : state.tag}</div>
                {validateFlag &&
                    <button onClick={handleEdit} className={styles.table__edit}><EditFilled /></button>
                }
                <button className={styles.table__delete}><DeleteFilled/></button>
            </div>
            {editing 
                ? (
                    <div className={styles.table__words}>
                        <input 
                        className={styles.table__word}
                        data-name="english"
                        type="text" 
                        value={state.english}
                        onChange={handleChangeInput}
                        />

                        <input 
                        className={styles.table__word}
                        data-name="transcription"
                        type="text" 
                        value={state.transcription}
                        onChange={handleChangeInput}
                        />

                        <input 
                        className={styles.table__word}
                        data-name="russian"
                        type="text" 
                        value={state.russian}
                        onChange={handleChangeInput}
                        />

                        <input 
                        className={styles.table__word}
                        data-name="tag"
                        type="text" 
                        value={state.tag}
                        onChange={handleChangeInput}
                        />
                        {validateFlag 
                        ?   <div>
                                <button onClick={handleEdit}  className={styles.table__save}><CheckOutlined /></button>
                            </div>
                        :  <div>
                                <button className={styles.button_error}>X</button>
                            </div>}
                            
                        <button onClick = {handleCancel} className={styles.table__cancel}>< CloseOutlined /></button>
                    </div>) 
                : ""}
        </div>
    )
}
