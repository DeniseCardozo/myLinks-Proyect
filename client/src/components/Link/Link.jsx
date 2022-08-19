import React, { useState } from "react";
import styles from "./Link.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";


export default function Link({link}) {
    const [showMiniForm, setShowMiniForm] = useState(false)

    function handleClick() {
        setShowMiniForm(!showMiniForm);
    }

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                <div className={styles.secundaryBox}>
                <h5 className={styles.nameTitle}>{link.name}</h5>
                <div className={styles.buttonBox}>
                    <img
                        src={edit}
                        alt="buttonedit"
                        className={styles.button} type="button" 
                        onClick={handleClick}
                    />
                    <img
                        src={deleteimg}
                        alt="buttondelete"
                        className={styles.button} type="button" 
                    />
                </div>
                </div>

                {/* este div tiene que aparece luego de que le hagan clic al boton de edit */}
                { showMiniForm &&
                    <div className={styles.editBox}>
                    <input
                        type="text"
                        value={link.name}
                        name="name"
                    />
                    <input
                        type="text"
                        value={link.url_link}
                        name="url_link"
                    />
                    </div>
                }
             
               

            </div>
           
        </React.Fragment>
    )
}