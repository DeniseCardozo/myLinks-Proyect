import React from "react";
import styles from "./WelcomePage.module.css";
import logo from "../../image/FavouriteLogo.png"
import { Link } from "react-router-dom";


export default function WelcomePage() {
    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <img
                        src={logo}
                        alt="logoFavoutrite"
                        className={styles.logo} type="button" 
                    />
                    <h1 className={styles.text}>All your favorite and important links in one place!</h1>
                    <div className={styles.line}></div>
                    <div className={styles.buttonBox}>
                        <Link to={"/register"}><button  className={styles.button}>REGISTER</button></Link>
                        <Link to={"/login"}><button  className={styles.button}>LOGIN</button></Link>
                    </div>
                </div>
               

            </div>
        </React.Fragment>
    )
}
