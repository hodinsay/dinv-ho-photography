import './Footer.scss';

const Footer = () => {
    return(
        <footer id='footer'>
            <header>
                <h2> &copy; 2023 Din Ho Photography</h2>
            </header>
            <nav>
                <span>
                    <a href="mailto:dinvho@gmail.com">
                        <i className="far fa-envelope"> Email</i>
                    </a>
                </span>
                <span className='hidden'>|</span>
                <span>
                    <a href="https://www.instagram.com/diiinv.ho/" target="_blank">
                        <i className="fab fa-instagram"> Instagram</i>
                    </a>
                </span>
            </nav>
        </footer>
    );
};

export default Footer;