
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {

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


  return (
    <>
        <nav className='navbar'>

            <div className="navbar-logo">
                <img src='/src/assets/shared/logo.svg' alt="" />
            </div>

            <div className="navbar-line"></div>

            <div className="burger-icon" onClick={ ()=> setIsNavExpanded( true ) }>
                <img src='/src/assets/shared/icon-hamburger.svg' alt="" />
            </div>

            <ul className={`navbar-list ${ isNavExpanded }`}>

                <button className="close-icon" onClick={ ()=> setIsNavExpanded( false ) }>
                    <img src='/src/assets/shared/icon-close.svg' alt="" />
                </button>

                <li className='navbar-item' onClick={ changeNavPosition }>
                    <Link to="home">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>00</span>
                        HOME
                    </div>
                    </Link>
                    {pathname.includes('home') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={ changeNavPosition }>
                    <Link to="destination/moon">
                    <div className="navbar-item-text">
                        <span className='navbar-item-number'>01</span>
                        DESTINATION
                    </div>
                    </Link>
                    {pathname.includes('destination') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={ changeNavPosition }>
                    <Link to="crew/hurley">
                        <div className="navbar-item-text">
                            <span className='navbar-item-number'>02</span>
                            CREW
                        </div>
                    </Link>
                    {pathname.includes('crew') && <div className='navbar-active-rectangle'></div>}
                    <div className='navbar-hover-rectangle'></div>
                </li>
                <li className='navbar-item' onClick={ changeNavPosition }>
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
