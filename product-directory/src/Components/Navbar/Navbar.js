import React from 'react';
import style from './Navbar.module.css';
import SVGHamBurger from '../../assets/icons/HamBurgerIcon';

export class Navbar extends React.Component {

    /**
     * State maintains if the menu is visible in smaller devices or not.
     */
    state = {
        isMenuActive: false
    }

    constructor() {
        super();
    }

    /**
     * Triggers event when toggle button is clicked.
     */
    onHamBurgerClicked = (event) => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        });
    }

    render() {
        let activeClass = style.inactive;

        if (this.state.isMenuActive) {
            activeClass = style.active;
        }

        return (
                <nav className={style.navbarWrapper} 
                     style={{backgroundColor: "gray"}}>
                     <span className={style.navbarHamToggle} onClick={this.onHamBurgerClicked}>
                        <SVGHamBurger width="24px" height="24px"/>
                    </span>
                    <a className={style.logo}>logo</a>
                    <ul className={[style.mainNav, activeClass].join(' ')} id="js-menu">
                        <li>
                            <a className={style.navLinks}>Home</a>
                        </li>
                        <li>
                            <a className={style.navLinks}>Products</a>
                        </li>
                        <li>
                            <a className={style.navLinks}>About Us</a>
                        </li>
                        <li>
                            <a className={style.navLinks}>Contact Us</a>
                        </li>
                        <li>
                            <a className={style.navLinks}>Blog</a>
                        </li>
                    </ul>
                </nav>
                );
    }
}

/*
[1. TODO: Add props setup for this component]
Inputs for props
logo = "imageUrl"
toggleButtonSize = "24px"
navLinks = {navLink: '', navName: ''}
*/