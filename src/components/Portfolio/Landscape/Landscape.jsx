import './Landscape.scss';
import Topscroll from '../../Topscroll/Topscroll';
import landscape1 from '../../../assets/landscape/landscape1.avif';
import landscape2 from '../../../assets/landscape/landscape2.avif';
import landscape3 from '../../../assets/landscape/landscape3.avif';
import landscape4 from '../../../assets/landscape/landscape4.avif';
import landscape5 from '../../../assets/landscape/landscape5.avif';
import landscape6 from '../../../assets/landscape/landscape6.avif';

const Landscape = () => {
    return(
        <section id='landscape'>
            <header>
                <h1>Landscape</h1>
                <h3>A collection of california landscape photographs.</h3>
            </header>
            <div className="landscape-flex-container">
                <div className="landscape-flex-box-one">
                    <figure className="landscape-flex-box-one-top">
                        <a href={landscape6} data-lightbox='landscape-pic' data-title='Golden Gate Bridge'>
                            <img src={landscape6} className='landscape-box' loading='lazy'/>                        
                        </a>
                    </figure>
                    <figure className="landscape-flex-box-one-bottom">
                        <a href={landscape4} data-lightbox='landscape-pic' data-title='Park'>
                            <img src={landscape4} className='landscape-box' loading='lazy'/>                        
                        </a>
                    </figure>
                </div>
                <figure className="landscape-flex-box-two">
                    <a href={landscape2} data-lightbox='landscape-pic' data-title='Lake'>
                        <img src={landscape2} className='landscape-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="landscape-flex-box-three">
                    <a href={landscape3} data-lightbox='landscape-pic' data-title='Land'>
                        <img src={landscape3} className='landscape-box' loading='lazy'/>                        
                    </a>
                </figure>
                <div className="landscape-flex-box-four">
                    <figure className="landscape-flex-box-four-top">
                        <a href={landscape1} data-lightbox='landscape-pic' data-title='Sunset'>
                            <img src={landscape1} className='landscape-box' loading='lazy'/>                        
                        </a>
                    </figure>
                    <figure className="landscape-flex-box-four-bottom">
                        <a href={landscape5} data-lightbox='landscape-pic' data-title='Beach'>
                            <img src={landscape5} className='landscape-box' loading='lazy'/>                        
                        </a>
                    </figure>
                </div>
            </div>
            <br />
            <Topscroll/>
        </section>
    );
};

export default Landscape;