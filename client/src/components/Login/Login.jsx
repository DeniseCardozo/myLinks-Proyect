import React from "react";
import styles from "./Login.module.css";

export default function Login() {
    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <h1  className={styles.title}>Login</h1>
                    <div className={styles.secondaryBox}>
                        <h5 className={styles.subtitle}>Email</h5>
                        <input type="text" className={styles.input} />
                        <h5 className={styles.subtitle}>Password</h5>
                        <input type="text" className={styles.input} />
                        <button className={styles.button}>Login</button>
                    </div>
                    
                </div>

            </div>
        </React.Fragment>
    )
}
