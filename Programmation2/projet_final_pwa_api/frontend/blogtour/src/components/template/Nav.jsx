import './Nav.css'
import React from 'react'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Accueil
            </a>
            <a href="#/">
                <i className="fa fa-user"></i> Utilisateurs
            </a>
            <a href="#/">
                <i className="fa fa-plane"></i> Voyages
            </a>
        </nav>
    </aside>