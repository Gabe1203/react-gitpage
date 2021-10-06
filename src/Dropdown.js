import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as LeftChevronIcon } from './images/chevron-left.svg'

function Dropdown() {

    const [activeMenu, setActiveMenu] = useState('main')
    const [menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href={props.href} className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>

                {props.children}

                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>
            <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem href="/about">About Me</DropdownItem>
                    {/* TODO: links are black text */}
                    <DropdownItem goToMenu="myWork" href="#">My Work</DropdownItem>
                    <DropdownItem goToMenu="main" href="/services">Services</DropdownItem>
                    <DropdownItem goToMenu="main" href="/contact">Contact Me</DropdownItem>
                    <DropdownItem goToMenu="main" href="/todo">TO DO</DropdownItem>
                </div>              
            </CSSTransition>
            <CSSTransition in={activeMenu === 'myWork'} unmountOnExit timeout={500} classNames="menu-secondary" onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" href="#" leftIcon={<LeftChevronIcon/>}></DropdownItem>
                    <DropdownItem goToMenu="main" href="/resume">Resume</DropdownItem>
                    <DropdownItem goToMenu="main" href="/portfolio">Portfolio</DropdownItem>
                    <DropdownItem goToMenu="main" href="/projectlist">Projects</DropdownItem>
                </div>        
            </CSSTransition>
        </div>
    )
}

export default Dropdown;