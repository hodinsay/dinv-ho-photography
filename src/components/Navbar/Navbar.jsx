import './Navbar.scss';
import Navlink from './Navlink';
import { useState, useEffect } from 'react';

const Navbar = (props) => {
    const [openMenu, setOpen] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 950){
            setOpen(true);
        } else if (window.innerWidth < 950){
            setOpen(false);
        }
    }, []);

    const openMenuHandler = () => {
        setOpen(!openMenu);
    };

    return(
        <nav className='flex-nav-bar' id='nav'>
            <header>
                <a href="/home" className='logo'>Din Ho</a>
                <p className='sublogo'>Photography</p>
            </header>
            <nav>
                {openMenu && <Navlink onClick={openMenuHandler}/>}  
                <ul>
                    <li>
                        <a href="mailto:dinvho@gmail.com">
                            <i className="far fa-envelope"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/diiinv.ho/" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-bars open-menu" onClick={openMenuHandler}></i>
                    </li>
                </ul>
            </nav>
        </nav>
    );
};

export default Navbar;