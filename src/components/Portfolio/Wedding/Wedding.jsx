import './Wedding.scss';
import Topscroll from '../../Topscroll/Topscroll';
import wedding1 from '../../../assets/wedding/wedding1.avif';
import wedding2 from '../../../assets/wedding/wedding2.avif';
import wedding3 from '../../../assets/wedding/wedding3.avif';
import wedding4 from '../../../assets/wedding/wedding4.avif';
import wedding5 from '../../../assets/wedding/wedding5.avif';
import wedding6 from '../../../assets/wedding/wedding6.avif';

const Wedding = () => {
    return(
        <section>
            <header>
                <h1>Wedding</h1>
                <h3>A collection of Phi and Alice wedding photographs.</h3>
            </header>
            <div className='wedding-flex-container'>
                <figure className='wedding-flex-box'>
                    <a href={wedding1} data-lightbox='wedding-pic' data-title='Alice'>
                        <img src={wedding1} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className='wedding-flex-box'>
                    <a href={wedding2} data-lightbox='wedding-pic' data-title='Phi and Alice'>
                        <img src={wedding2} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className='wedding-flex-box'>
                    <a href={wedding3} data-lightbox='wedding-pic' data-title='Phi and Alice'>
                        <img src={wedding3} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className='wedding-flex-box'>
                    <a href={wedding5} data-lightbox='wedding-pic' data-title='Phi and Alice'>
                        <img src={wedding5} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className='wedding-flex-box'>
                    <a href={wedding6} data-lightbox='wedding-pic' data-title='Phi and Alice'>
                        <img src={wedding6} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className='wedding-flex-box'>
                    <a href={wedding4} data-lightbox='wedding-pic' data-title='Phi and Alice'>
                        <img src={wedding4} className='wedding-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br/>
            <Topscroll />
        </section>
    );
};

export default Wedding;