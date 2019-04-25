import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
import {OptionEnum} from './../utilities/enums.js';

const MenuItem = (props) =>{
    let menuItemClass = "menu-item outline"
    if(props.type === OptionEnum.IMPORTANT){
        menuItemClass += " bullet-hole";
    }
    return(
        <div className= {menuItemClass}>
            <Link to={props.link}>{props.name}</Link>
        </div>
    )
}

export default MenuItem;