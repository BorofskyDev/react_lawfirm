import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { GoLaw } from 'react-icons/go';
import { GiInjustice, GiScales } from 'react-icons/gi';
import { Button } from '../Button';
import './Navbar.css'; 
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)   
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
       <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            <GoLaw className='navbar-icon' />
                            NZA Lawfirm
                        </NavLink>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <GiScales /> : <GiInjustice />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/contact' className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <NavLink to='/sign-up' className="btn-link" >
                                        <Button buttonStyle='btn-outline'>Log In

                                        </Button>
                                    </NavLink>
                                ): (
                                        <NavLink to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                                        <Button buttonStyle='btn-outline'
                                        buttonSize='btn--mobile'>
                                            Log In
                                        </Button>
                                    </NavLink>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
       </>
    );
}

export default Navbar
