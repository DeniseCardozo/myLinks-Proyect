import React, { useState } from "react";
import Link from "../Link/Link";
import styles from "./Box.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
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
                <div className={styles.nameBox}>
                    
                    {
                        showMiniForm ? 
                        <div>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                            <button type="submit">OK</button>
                            <button onClick={(e) => handleClick(e)}>CANCEL</button>
                        </form>
                        </div> :
                        <>
                            <h1 className={styles.nameTitle}>{box.name}</h1>
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
                        </>
                    }
                  
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