import React, {Component} from 'react';
import MenuItem from './Menu-item.js';
import './Menu.css';

class Menu extends Component {
    state = {
        options: ['Intro','Play','About','Tech stack']
    }
    render(){
        const optionsList = this.state.options.map(nameToDisplay =>{
            return(
                <MenuItem name={nameToDisplay} key={Math.random()}/>
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