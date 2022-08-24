import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Register.module.css";
import Swal from 'sweetalert2'
import { Link, useHistory } from "react-router-dom";
import { postNewUser } from "../../redux/actions/authorization";


export default function Register() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [input, setInput] = useState({ 
        name: "",
        e_mail: "",
        password: ""
    })

    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postNewUser(input))
        setInput({ 
            name: "",
            e_mail: "",
            password: ""
        })
        Swal.fire({
            title: 'Success',
            text: "User Created",
            icon: 'succces',
            showCancelButton: false,
            confirmButtonColor: '#A7D129',
            cancelButtonColor: 'rgb(43, 43, 44);',
            confirmButtonText: 'Greate'
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/login");
            }
          })
    }

    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <h1  className={styles.title}>Register</h1>
                        <form className={styles.secondaryBox} onSubmit={handleSubmit}>
                            <h5 className={styles.subtitle}>Name</h5>
                            <input type="text" value={input.name} name="name" className={styles.input} onChange={(e) => handleChange(e)} />
                            <h5 className={styles.subtitle}>Email</h5>
                            <input type="text" value={input.e_mail} name="e_mail" className={styles.input} onChange={(e) => handleChange(e)} />
                            <h5 className={styles.subtitle}>Password</h5>
                            <input type="password" value={input.password} name="password" className={styles.input} onChange={(e) => handleChange(e)} />
                            <button className={styles.button} type="submit">Register</button>
                            <h5 className={styles.text}>
                                Already a user? <Link to={"/login"} style={{color:"whitesmoke"}}>Log in</Link>
                            </h5>
                        </form>
                </div>
            </div>
        </React.Fragment>
    )
}
