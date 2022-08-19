import React from "react";
import Link from "../Link/Link";
import styles from "./Box.module.css"

export default function Box({box}) {
    console.log(box)
    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                <div className={styles.nameBox}>
                    <h1>I'm {box.name}!</h1>
                </div>
                {
                    box.links && 
                    box.links.map((link) => 
                    <Link key={link.id_link} link={link} />)
                    //<div key={link.id_link}>
                      //  <h5>{link.name}</h5>
                      //  <h5>{link.url_link}</h5>
                    //</div>)
                }
            </div>
        </React.Fragment>
    )
}