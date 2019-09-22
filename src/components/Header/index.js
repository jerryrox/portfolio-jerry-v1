import React from 'react';
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    onExpandButton = () => {
        const button = document.querySelector("#headerExpandButton");
        const menu = document.querySelector("#headerExpansionMenu");
        if(button.classList.contains("expanded")) {
            button.classList.remove("expanded");
            menu.classList.remove("expanded");
        }
        else {
            button.classList.add("expanded");
            menu.classList.add("expanded");
        }
    };

    render() {
        return(
            <div className="header">
                <div id="headerExpandButton" className="expandButton menuButton" onClick={this.onExpandButton}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div id="headerExpansionMenu" className="expansionMenu">
                    <ul>
                        <li><Link to="/" onClick={this.onExpandButton}>Home</Link></li>
                        <li><Link to="/about" onClick={this.onExpandButton}>About Me</Link></li>
                        <li><Link to="/projects" onClick={this.onExpandButton}>Projects</Link></li>
                        <li><Link to="/contact" onClick={this.onExpandButton}>Contact Me</Link></li>
                    </ul>
                </div>

                <ul className="menu leftMenu">
                    <li className="menuItem">
                        <Link to="/">
                            <button className="menuButton">Home</button>
                        </Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/about">
                            <button className="menuButton">About Me</button>
                        </Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/projects">
                            <button className="menuButton">Projects</button>
                        </Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/contact">
                            <button className="menuButton">Contact Me</button>
                        </Link>
                    </li>
                </ul>
                <ul className="menu rightMenu">
                    <li className="menuItem">
                        <a href="https://github.com/jerryrox" target="_blank" rel="noopener noreferrer">
                            <button className="menuButton"><i className="fa fa-github-square fa-2x"></i></button>
                        </a>
                    </li>
                    <li className="menuItem">
                        <a href="https://jerryroxdev.blogspot.com" target="_blank" rel="noopener noreferrer">
                            <button className="menuButton"><i className="fa fa-book fa-2x"></i></button>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}