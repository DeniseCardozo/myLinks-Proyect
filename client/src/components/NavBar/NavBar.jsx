import React from "react";
import style from "./NavBar.module.css";

export default function NavBar() {
    return (
        <React.Fragment>
            <div className={style.header}>
                <div className={style.navMenu}>   
                    <div className={style.links}>
                        <h5>FAVOURITE</h5>
                    </div>     
                    <div className={style.links}>
                        <h5>User</h5>
                    </div>                    
                </div>
            </div> 
        </React.Fragment>
    )
}
