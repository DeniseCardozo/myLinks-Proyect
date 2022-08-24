import React from "react";
import style from "./NavBar.module.css";
import logo from "../../image/FavouriteLogo.png"
import logout from "../../image/logout.png"
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authorization";
import { useHistory } from "react-router-dom";

export default function NavBar() {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleClick() {
        dispatch(logoutUser())
        history.push("/")
    }

    return (
        <React.Fragment>
            <div className={style.header}>
                <div className={style.navMenu}>  
                    <img
                        src={logo}
                        alt="logoFavoutrite"
                        className={style.logo} type="button" 
                    />
                    <img
                        src={logout}
                        alt="logoFavoutrite"
                        className={style.logout} type="button" onClick={handleClick}
                    />                    
                    </div>                    
            </div> 
        </React.Fragment>
    )
}
