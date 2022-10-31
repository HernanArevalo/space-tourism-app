
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {

    const { pathname } = useLocation()

  return (
    <>
        <nav className='navbar'>

            <div className="navbar-logo">
                <img src='src/assets/shared/logo.svg' alt="" />
            </div>

            <div className="navbar-line"></div>

            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="home">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>00</span>
                        HOME
                    </div>
                    </Link>
                    {pathname.includes('home') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item'>
                    <Link to="destination">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>01</span>
                        DESTINATION
                    </div>
                    </Link>
                    {pathname.includes('destination') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item'>
                    <Link to="crew">
                        <div className="navbar-item-text">
                            <span className='navbar-item-number'>02</span>
                            CREW
                        </div>
                    </Link>
                    {pathname.includes('crew') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item'>
                    <Link to="technology">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>03</span>
                        TECHNOLOGY
                    </div>

                    </Link>
                    {pathname.includes('technology') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
            </ul>

        </nav>
    </>
  )
}
