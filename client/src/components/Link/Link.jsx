import React, { useState } from "react";
import styles from "./Link.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";
import { putLink } from "../../redux/actions";
import { useDispatch } from "react-redux";


export default function Link({link, setUpdateList, updateList}) {
    const dispatch = useDispatch();
    const [showMiniForm, setShowMiniForm] = useState(false);
    const [input, setInput] = useState({
        name: link.name,
        url_link: link.url_link
    });

    function handleClick() {
        setShowMiniForm(!showMiniForm);
    }
    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putLink(link.id_link, input))
        setShowMiniForm(!showMiniForm)
        setUpdateList(!updateList)

    } 

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                { showMiniForm ?
                        <form className={styles.formBox} onSubmit={(e) => handleSubmit(e)}>
                            <div className={styles.inputsBox}>
                                <input
                                    type="text"
                                    value={input.name}
                                    name="name"
                                    className={styles.input}
                                    onChange={(e) => handleChange(e)} 
                                />
                                <input
                                    type="text"
                                    value={input.url_link}
                                    name="url_link"
                                    className={styles.input}
                                    onChange={(e) => handleChange(e)}
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
                        {/* <h5 className={styles.nameTitle}>{link.name}</h5> */}
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
                        <a href={`${link.url_link}`} target="_blank" className={styles.nameTitle}>{link.name}</a>
                        </div>
                }



              

    
               

            </div>
           
        </React.Fragment>
    )
}