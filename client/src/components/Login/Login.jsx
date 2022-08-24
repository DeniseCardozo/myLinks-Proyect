import React, { useEffect, useState } from "react";
import{ useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postLogin } from "../../redux/actions/authorization";
import styles from "./Login.module.css";

export default function Login() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { loggedIn, currentUser } = useSelector((state) => state.auth);
    // const currentUser = useSelector((state) => state.auth);
    // const loggedIn = useSelector((state) => state.auth)
    const [input, setInput] = useState({
        e_mail: "",
        password: ""
    })

    useEffect(() => {
        console.log(currentUser)
        if(loggedIn) {
            history.push(`/home/${currentUser.id_user}`);
        }
    }, [loggedIn, currentUser, history]);

    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {  
        e.preventDefault();
        dispatch(postLogin(input))
        setInput({ 
            e_mail: "",
            password: ""
        });   
        
    }

    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <h1  className={styles.title}>Login</h1>
                    <form className={styles.secondaryBox}  onSubmit={handleSubmit}>
                        <h5 className={styles.subtitle}>Email</h5>
                        <input type="text" value={input.e_mail} name="e_mail" className={styles.input} onChange={(e) => handleChange(e)} />
                        <h5 className={styles.subtitle}>Password</h5>
                        <input type="password" value={input.password} name="password" className={styles.input} onChange={(e) => handleChange(e)} />
                        <button className={styles.button} type="submit">Login</button>
                        <h5 className={styles.text}>
                            Not a member? <Link to={"/register"} style={{color:"whitesmoke"}}>Register now</Link>

                            </h5>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}
