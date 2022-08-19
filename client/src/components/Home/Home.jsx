import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "../Box/Box";
import styles from "./Home.module.css"
import { getUser, getAllBoxes } from "../../redux/actions";

export default function Home(props) {
    const params = Number(props.match.params.id_user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser(params));
        dispatch(getAllBoxes(params));
    }, [dispatch, params])

    let user = useSelector((state) => state.user)
    let boxes = useSelector((state) => state.boxes)
    console.log(boxes);

    return (
        <React.Fragment>
            <div className={styles.containerBox}>
                <div className={styles.principalBox}>
                    <div className={styles.greetingBox}>
                        <h1>Good morning {user.name}!</h1>
                        <h1>How are you?</h1>
                    </div>
                    <div className={styles.allCardsBox}>
                        {boxes &&
                            boxes.map((box) => <div><Box key={box.id_box} box={box}/></div>)
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}