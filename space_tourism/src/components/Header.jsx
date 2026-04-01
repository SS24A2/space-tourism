import { Link } from 'react-router-dom'
import { useState } from 'react'

import logoImage from '../assets/shared/logo.svg'
import menuImage from '../assets/shared/icon-hamburger.svg'
import closeImage from '../assets/shared/icon-close.svg'

export default function Header({ selectedPage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <section className={isMobileMenuOpen ? 'header' : 'header menu-hidden'}>
            <div className="header-logo">
                <img src={logoImage} alt="logo" />
            </div>
            <div></div>
            <ul className="header-nav">
                <img
                    src={closeImage}
                    alt="close"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                <li
                    className={
                        selectedPage === 'home' ? 'page-active' : 'page-idle'
                    }
                >
                    <Link to="/">
                        <span>00</span>
                        <span>Home</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'destination'
                            ? 'page-active'
                            : 'page-idle'
                    }
                >
                    <Link to="/destination">
                        <span>01</span>
                        <span>Destination</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'crew' ? 'page-active' : 'page-idle'
                    }
                >
                    <Link to="/crew">
                        <span>02</span>
                        <span>Crew</span>
                    </Link>
                </li>
                <li
                    className={
                        selectedPage === 'technology'
                            ? 'page-active'
                            : 'page-idle'
                    }
                >
                    <Link to="/technology">
                        <span>03</span>
                        <span>Technology</span>
                    </Link>
                </li>
            </ul>
            <div
                className="header-menu-mobile"
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <img src={menuImage} alt="menu" />
            </div>
        </section>
    )
}
