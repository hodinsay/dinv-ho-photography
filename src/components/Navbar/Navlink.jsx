import './Navbar.scss';
import { Fragment } from 'react';

const Navlink = (props) => {

    return(
        <Fragment>
            <ul className='nav-menu'>
                <li>
                    <i className="fas fa-times close-menu" onClick={props.onClick}></i>
                </li>
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li className='dropdown'>
                    <a>Portfolio</a>
                    <ul className='dropdown-menu'>
                        <li><a href="/city">City</a></li>
                        <li><a href="/landscape">Landscape</a></li>
                        <li><a href="/portrait">Portrait</a></li>
                        <li><a href="/wedding">Wedding</a></li>
                        <li><a href="/food">Food</a></li>
                        <li><a href="/animal">Animal</a></li>
                        <li><a href="/people">People</a></li>
                        <li><a href="/car">Car</a></li>
                    </ul>
                </li>
            </ul>
        </Fragment>
    );
};

export default Navlink;