import React, {Component} from 'react';
import MenuItem from './Menu-item.js';
import {OptionEnum} from './../utilities/enums.js';
import './Menu.css';

class Menu extends Component {

    state = {
        options:   [
                        {name:"Intro", type:OptionEnum.NORMAL, link:"/intro"},
                        {name:"Play", type:OptionEnum.IMPORTANT, link:"/play"},
                        {name:"Options", type:OptionEnum.NORMAL, link:"/options"},
                        {name:"About", type:OptionEnum.NORMAL, link:"/about"},
                        {name:"Tech stack", type:OptionEnum.NORMAL, link:"/stack"}
                    ]

    }
    render(){
        const optionsList = this.state.options.map(option =>{
            return(
                <MenuItem name={option.name} type={option.type} link={option.link} key={Math.random()}/>
            )
        })
       return(
        <div className="menu">
            {optionsList}
        </div>
        )
    }
}
export default Menu;