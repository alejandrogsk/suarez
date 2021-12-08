import React from "react";
import Link from "next/link";

import { NavigationItem } from "../types/navigationTypes";

import * as Scroll from 'react-scroll';

interface NavigationProps { navigation: NavigationItem[], language: string|undefined}

const MobileMenu = ( { navigation, language } : NavigationProps ) => {
    let Linkeable = Scroll.Link;

    const handleClick = () => {
        if(document !== null){
            let menuCheckbox = document.getElementById("navi-toggle") as HTMLInputElement
            menuCheckbox.checked = false;
        }
    }

    return (
        <div className="navbar__responsive d-n">
            <input
                type="checkbox"
                className="navbar__responsive--checkbox"
                id="navi-toggle"
            />

            <label htmlFor="navi-toggle" className="navbar__responsive--button">
                <span className="navbar__responsive--icon">&nbsp;</span>
            </label>

            <div className="navbar__responsive--background">&nbsp;</div>

            <div className="navbar__responsive--nav">
                <ul className="navbar__responsive--list">
                    {navigation.map((item, i) => (
                        <li key={i} className="navbar__responsive--item">
                            <Linkeable
                             to={item.path} 
                             smooth={true} 
                             duration={1000}
                             onClick={handleClick}
                            >
                                <a className="navbar__responsive--link">
                                    {item.title}
                                </a>
                            </Linkeable>
                        </li>
                    ))}
                    <li>
                    <Link  href="/" locale={language === "es" ? "en" : "es"}>
                        <a onClick={handleClick} className="header__content--lang">{language === "es" ? "en" : "es"}</a>
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;