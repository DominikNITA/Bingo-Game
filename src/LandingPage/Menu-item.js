import React from 'react';
import './Menu.css';

const MenuItem = (props) =>{
    let menuItemClass = "menu-item outline"
    if(props.name === "Play"){
        menuItemClass += " bullet-hole";
    }
    return(
        <div className= {menuItemClass}>
            {props.name}
        </div>
    )
}

export default MenuItem;