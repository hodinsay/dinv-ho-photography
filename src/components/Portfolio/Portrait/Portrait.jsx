import './Portrait.scss';
import Topscroll from '../../Topscroll/Topscroll';
import portrait1 from '../../../assets/portrait/portrait1.avif';
import portrait2 from '../../../assets/portrait/portrait2.avif';
import portrait3 from '../../../assets/portrait/portrait3.avif';
import portrait6 from '../../../assets/portrait/portrait6.avif';
import portrait7 from '../../../assets/portrait/portrait7.avif';
import portrait8 from '../../../assets/portrait/portrait8.avif';

const Portrait = () => {
    return(
        <section id='portrait'>
            <header>
                <h1>Portrait</h1>
                <h3>A collection of portraits photographs.</h3>
            </header>
            <div className="portrait-flex-container">
                <figure className="portrait-flex-box">
                    <a href={portrait7} data-lightbox='portrait-pic' data-title='model-one'>
                        <img src={portrait7} alt="model-one" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="portrait-flex-box">
                    <a href={portrait6} data-lightbox='portrait-pic' data-title='model-two'>
                        <img src={portrait6} alt="model-two" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="portrait-flex-box">
                    <a href={portrait1} data-lightbox='portrait-pic' data-title='model-three'>
                        <img src={portrait1} alt="model-three" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="portrait-flex-box">
                    <a href={portrait8} data-lightbox='portrait-pic' data-title='Nicole'>
                        <img src={portrait8} alt="nicole" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="portrait-flex-box">
                    <a href={portrait2} data-lightbox='portrait-pic' data-title='Sean'>
                        <img src={portrait2} alt="Sean" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="portrait-flex-box">
                    <a href={portrait3} data-lightbox='portrait-pic' data-title='Phi'>
                        <img src={portrait3} alt="Phi" className='model-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br />
            <Topscroll />
        </section>
    );
};

export default Portrait;