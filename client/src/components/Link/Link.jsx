import React, { useState } from "react";
import styles from "./Link.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";


export default function Link({link}) {
    const [showMiniForm, setShowMiniForm] = useState(false)

    function handleClick() {
        setShowMiniForm(!showMiniForm);
    }

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                { showMiniForm ?
                        <form className={styles.formBox}>
                            <div className={styles.inputsBox}>
                                <input
                                    type="text"
                                    value={link.name}
                                    name="name"
                                    className={styles.input} 
                                />
                                <input
                                    type="text"
                                    value={link.url_link}
                                    name="url_link"
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.buttonBox2}>

                                <button className={styles.buttonDefault} type="submit">                                
                                    <img
                                        src={ok}
                                        alt="buttonOk"
                                        className={styles.button} type="button" 
                                    />
                                </button>

                                <img
                                    src={cancel}
                                    alt="buttonCancel"
                                    className={styles.button} type="button"  onClick={(e) => handleClick(e)}
                                /> 
                            </div>
                        </form> :
                    <div className={styles.secundaryBox}>
                        <h5 className={styles.nameTitle}>{link.name}</h5>
                        <div className={styles.buttonBox}>
                            <div className={styles.subButtonBox}>

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
                        </div>
                }



              

    
               

            </div>
           
        </React.Fragment>
    )
}