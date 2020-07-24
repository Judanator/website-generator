import React from 'react'
import './Menu.css'

const Menu = () => {
    return (
        <nav className="menuDiv">
            <a href="/"><img src="https://i.postimg.cc/WzV9WrpW/output-onlinejpgtools.png" alt="logo" className="logo"/></a>
            <ul className="menuItemDiv">
                <li><a href="/"> build a site </a></li>
                <li><a href="/"> services </a></li>
                <li><a href="/"> blog </a></li>
                <li><a href="/"> contact us </a></li>
            </ul>
        </nav>
    )
}

export default Menu
