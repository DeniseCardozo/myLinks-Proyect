import React from "react";
import styles from "./Box.module.css"

export default function Box() {
    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                <h1>I'M BOX!</h1>
                <h2>Aquí guardaremos links</h2>
            </div>
        </React.Fragment>
    )
}