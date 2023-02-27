import './Topscroll.scss';
import { Link } from 'react-scroll';

const Topscroll = () =>{
    return(
        <div className='topscroll'>
            <div className='scroll-link'>
                <Link to="nav" spy={true} smooth={true} offset={50} duration={500}>	&uarr;</Link>
            </div>
        </div>
    );
};

export default Topscroll;