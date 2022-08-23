import React from "react";
import styles from "./Register.module.css";

export default function Register() {
    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <h1  className={styles.title}>Register</h1>
                    <div className={styles.secondaryBox}>
                        <h5 className={styles.subtitle}>Email</h5>
                        <input type="text" className={styles.input} />
                        <h5 className={styles.subtitle}>Password</h5>
                        <input type="text" className={styles.input} />
                        <button className={styles.button}>Register</button>
                        <h5 className={styles.text}>Already a user? Log in</h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
