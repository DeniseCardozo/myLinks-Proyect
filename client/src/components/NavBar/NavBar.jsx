import React from "react";
import style from "./NavBar.module.css";
import logo from "../../image/FavouriteLogo.png"

export default function NavBar() {
    return (
        <React.Fragment>
            <div className={style.header}>
                <div className={style.navMenu}>  
                    <img
                        src={logo}
                        alt="logoFavoutrite"
                        className={style.logo} type="button" 
                    />
                    <div className={style.links}>
                        <h5>User</h5>
                    </div>                    
                </div>
            </div> 
        </React.Fragment>
    )
}
