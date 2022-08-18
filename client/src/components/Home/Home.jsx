import React from "react";
import Box from "../Box/Box";
import styles from "./Home.module.css"

export default function Home() {
    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <div className={styles.greetingBox}>
                        <h1>Good morning User!</h1>
                        <h1>How are you?</h1>
                    </div>
                    <div className={styles.allCardsBox}>
                        <Box />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}