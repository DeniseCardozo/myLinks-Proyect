import React, { useEffect, useState } from "react";
import styles from "./Link.module.css"
import deleteimg from "../../image/delete.png";
import edit from "../../image/edit.png";
import ok from "../../image/ok.png";
import cancel from "../../image/cancel.png";
import { deleteLink, getAllBoxes, putLink } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";


export default function Link({link, setUpdateList, updateList}) {
    const dispatch = useDispatch();
    const [showMiniFormEdit, setShowMiniFormEdit] = useState(false);
    const [input, setInput] = useState({
        name: link.name,
        url_link: link.url_link
    });
    console.log(link)

     function handleClick() {
        setShowMiniFormEdit(!showMiniFormEdit);
    }
    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putLink(link.id_link, input))
        setShowMiniFormEdit(!showMiniFormEdit)
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
            dispatch(deleteLink(link.id_link))
            Swal.fire(
              'Deleted!',
              `${link.name} has been deleted successfully.`,
              'success'
            )
            setUpdateList(!updateList)
          }
        })
      }

    return (
        <React.Fragment>
            <div className={styles.principalBox}>
                { showMiniFormEdit ?
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
                                    onClick={(e)=>handleDelete(e)}
                                />
                            </div>
                        </div>
                        <a href={`${link.url_link}`} target="_blank" rel="noreferrer" className={styles.nameTitle}>{link.name}</a>
                        </div>
                }
            </div>
           
        </React.Fragment>
    )
}