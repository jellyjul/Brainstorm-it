import React from "react";
import styles from "../styles/notfound.module.scss"
import { Link } from "react-router-dom";

export default function NotFound() {

    return(
        <div className={styles.container}>
            <div className={styles.box}>
            <div className={styles.title}>Whoops!</div>
            <div className={styles.subtitle}>This page got lost on the way</div>
            <div className={styles.text}>But you can always 
                <Link to = "/" className={styles.link}> go home</Link>
            </div>
            </div>
        </div>
    )
}