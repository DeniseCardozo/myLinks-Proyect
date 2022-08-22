import React, { useState } from "react";
import Link from "../Link/Link";
import styles from "./Box.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
import add from "../../image/add.png";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteBox, deleteLink, putNameBox } from "../../redux/actions";
import NewLink from "../NewLink/NewLink";

export default function Box({box, setUpdateList, updateList}) {
    const dispatch = useDispatch();
    const [showMiniForm, setShowMiniForm] = useState(false)
    const [showMiniFormLink, setShowMiniFormLink] = useState(false)
    const [input, setInput] = useState({ name: box.name })

    function handleClick() {
        setShowMiniForm(!showMiniForm);
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
    function handleDelete(e) { 
        e.preventDefault()
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#A7D129',
          cancelButtonColor: 'rgb(43, 43, 44);',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteBox(box.id_box))
            box.links.map((link) => dispatch(deleteLink(link.id_link)))
            Swal.fire(
              'Deleted!',
              `${box.name} has been deleted successfully.`,
              'success'
            )
            setUpdateList(!updateList)
          }
        })
      }

      function handleAddLink() {
        setShowMiniFormLink(!showMiniFormLink);
    }

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                { showMiniForm ? 
                    <form onSubmit={(e) => handleSubmit(e)} className={styles.formBox}>
                        <input type="text" value={input.name} name="name" className={styles.inputName} onChange={(e) => handleChange(e)} />
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
                    <div className={styles.nameBox}>                           
                        <h1 className={styles.nameTitle}>{box.name}</h1>
                        <div className={styles.buttonBox}>
                            <div className={styles.subButtonBox}>
                                <img
                                    src={add}
                                    alt="buttonadd"
                                    className={styles.button} type="button" 
                                    onClick={(e)=>handleAddLink(e)}

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
                                    onClick={(e)=>handleDelete(e)}
                                />
                            </div>  
                        </div>
                    </div>
                }
                {
                    showMiniFormLink &&
                    <NewLink box={box} setShowMiniFormLink={setShowMiniFormLink} showMiniFormLink={showMiniFormLink} />
                }
                {
                    box.links && 
                    box.links.map((link) => 
                    <Link key={link.id_link} link={link} setUpdateList={setUpdateList} updateList={updateList} />)
                }
            </div>
        </React.Fragment>
    )
}