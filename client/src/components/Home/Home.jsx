import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../Box/Box";
import styles from "./Home.module.css"
import { getUser, getAllBoxes, postNewBox } from "../../redux/actions";
import Swal from 'sweetalert2'

export default function Home(props) {
    const params = Number(props.match.params.id_user);
    const dispatch = useDispatch();

    const [updateList, setUpdateList] = useState(false);
    const [showMiniForm, setShowMiniForm] = useState(false)
    const [input, setInput] = useState({name:""})

    useEffect(() => {
        dispatch(getUser(params));
        dispatch(getAllBoxes(params));
    }, [dispatch, params, updateList])

    let user = useSelector((state) => state.user)
    let boxes = useSelector((state) => state.boxes)

   
    function handleClick() {
        setShowMiniForm(!showMiniForm);
    }

    function handleChange(e) {
        e.preventDefault();
        setInput(({...input, [e.target.name]: e.target.value}));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postNewBox(params, input))
        setShowMiniForm(!showMiniForm)
        setInput({name:""})
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
            title: 'Box created successfully'
          })
    }

    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <div className={styles.greetingBox}>
                        <h1>Good morning {user.name}!</h1>
                        <h1>How are you?</h1>
                        <div className={styles.createNewBox}>
                            <button onClick={(e) => handleClick(e)} className={styles.newBoxButton}>+</button>
                            {
                                showMiniForm && 
                                <div>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <input type="text" value={input.name} name="name" onChange={(e) => handleChange(e)} />
                                    <button type="submit">OK</button>
                                </form>
                                </div>
                            }
                        </div>
                        
                    </div>
                    <div className={styles.allCardsBox}>
                        {boxes &&
                            boxes.map((box) => <div><Box key={box.id_box} box={box} setUpdateList={setUpdateList} updateList={updateList} /></div>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}