
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'
import iconLogo from '../assets/shared/logo.svg'
import iconHamburger from '../assets/shared/icon-hamburger.svg'
import iconClose from '../assets/shared/icon-close.svg'
import { activateNavBar, desactivateNavBar } from "../store/navbar";


export const Navbar = () => {

    const dispatch = useDispatch()
    const { navbarState } = useSelector((state) => state.navbar)

    const { pathname } = useLocation()

    const [width, setWidth] = useState(0);

    useEffect(() => {
      const updateWindowDimensions = () => {
        const newWidth = window.innerWidth;
        setWidth(newWidth);
      };
  
      window.addEventListener("resize", updateWindowDimensions);
  
      return () => window.removeEventListener("resize", updateWindowDimensions) 
  
    }, []);

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    const changeNavPosition = () =>{
        if (width < 410){
            setIsNavExpanded( !isNavExpanded )
        }else{
            setIsNavExpanded( false )
        }
    }

    const onBurgerClicked = () => {
        dispatch( activateNavBar() )
    }


  return (
    <>
        <nav className='navbar'>

            <div className="navbar-logo">
                <img src={ iconLogo } alt="" />
            </div>

            <div className="navbar-line"></div>

            <div className="burger-icon" onClick={ onBurgerClicked }>
                <img src={ iconHamburger } alt="" />
            </div>

            <ul className={`navbar-list ${ navbarState }`}>

                <button className="close-icon" onClick={ ()=> dispatch( desactivateNavBar() ) }>
                    <img src={ iconClose } alt="" />
                </button>

                <li className='navbar-item' onClick={  ()=> dispatch( desactivateNavBar() )  }>
                    <Link to="home">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>00</span>
                        HOME
                    </div>
                    </Link>
                    {pathname.includes('home') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={  ()=> dispatch( desactivateNavBar() )  }>
                    <Link to="destination/moon">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>01</span>
                        DESTINATION
                    </div>
                    </Link>
                    {pathname.includes('destination') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={  ()=> dispatch( desactivateNavBar() )  }>
                    <Link to="crew/hurley">
                        <div className="navbar-item-text">
                            <span className='navbar-item-number'>02</span>
                            CREW
                        </div>
                    </Link>
                    {pathname.includes('crew') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={  ()=> dispatch( desactivateNavBar() )  }>
                    <Link to="technology/launch%20vehicle">
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
