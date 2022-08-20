import React, { useState } from "react";
import Link from "../Link/Link";
import styles from "./Box.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
import add from "../../image/add.png";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";

import { useDispatch } from "react-redux";
import { putNameBox } from "../../redux/actions";

export default function Box({box, setUpdateList, updateList}) {
    const dispatch = useDispatch();
    const [showMiniForm, setShowMiniForm] = useState(false)
    const [input, setInput] = useState({ name: box.name })

    function handleClick() {
        setShowMiniForm(!showMiniForm);
        console.log(showMiniForm);
    }

    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putNameBox(box.id_box, input))
        setShowMiniForm(!showMiniForm);
        setUpdateList(!updateList)
    }


    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                    {
                        showMiniForm ? 
                        <form onSubmit={(e) => handleSubmit(e)} className={styles.formBox}>
                            <input type="text" value={input.name} name="name" className={styles.inputName} onChange={(e) => handleChange(e)} />
                            <div className={styles.buttonBox2}>
                                <button className={styles.buttonDefault} type="submit">                                <img
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
                            <div className={styles.nameBox}>                           
                                <h1 className={styles.nameTitle}>{box.name}</h1>
                                <div className={styles.buttonBox}>
                                    <div className={styles.subButtonBox}>
                                        <img
                                            src={add}
                                            alt="buttonadd"
                                            className={styles.button} type="button" 
                                        />
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
                {
                    box.links && 
                    box.links.map((link) => 
                    <Link key={link.id_link} link={link} />)
                }
            </div>
        </React.Fragment>
    )
}