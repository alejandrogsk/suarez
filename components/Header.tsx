import React from 'react'
import HomeEnglish from '../content/english/navigation.json';
import HomeSpanish from '../content/español/navigation.json';
import Link from 'next/link';
import * as Scroll from 'react-scroll';
import MobileMenu from "./MobileNavbar";

import { LanguageI, HeaderData, NavigationItem } from "../types/navigationTypes";

const Header = ( { language }: LanguageI ) => {
    let data: HeaderData = language === "es" ? HomeSpanish : HomeEnglish;

    let Linkeable = Scroll.Link;

    return (
        <header className="header">
            <span className="header__title">{data.title}</span>

            <div className="header__content ">
                <ul className="header__content--menu navigation__hide">
                    {
                        data.navigation.map((item:NavigationItem, index:number ) => (
                            <li key={index} className="">
                                <Linkeable 
                                    to={item.path} 
                                    smooth={true} 
                                    duration={1000}
                                >
                                    {item.title}
                                </Linkeable>
                            </li>
                        ))
                    }
                </ul>
                <div className="navigation__hide">
                    <Link  href="/" locale={language === "es" ? "en" : "es"}>
                        <a className="header__content--lang">{language === "es" ? "en" : "es"}</a>
                    </Link>
                </div>
                <MobileMenu navigation={data.navigation} language={language}/>
            </div>
        </header>
    )
}

export default Header
