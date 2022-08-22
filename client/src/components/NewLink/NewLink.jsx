import React, { useState } from "react";
import styles from "./NewLink.module.css"
import { useDispatch } from "react-redux";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";
import Swal from "sweetalert2";
import { postNewLink } from "../../redux/actions";

export default function NewLink({ box, showMiniFormLink, setShowMiniFormLink, setUpdateList, updateList}) {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        name: "",
        url_link: ""
    });

    function handleClick() {
        setShowMiniFormLink(!showMiniFormLink);
    }

    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postNewLink(box.id_box, input))
        setShowMiniFormLink(!showMiniFormLink);
        setInput({ 
            name: "",
            url_link: ""})
        setUpdateList(!updateList);
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            background: '#fff',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
          })
          Toast.fire({
            icon: 'success',
            title: 'Link created successfully'
          })

    }

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                    <form className={styles.formBox} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.inputsBox}>
                        <input
                            type="text"
                            value={input.name}
                            name="name"
                            placeholder="Write a name..."
                            className={styles.input}
                            onChange={(e) => handleChange(e)} 
                        />
                        <input
                            type="text"
                            value={input.url_link}
                            name="url_link"
                            placeholder="Paste URL/Link..."
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
                </form>
            </div>
        </React.Fragment>
    )

}

