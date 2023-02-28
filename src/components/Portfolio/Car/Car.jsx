import './Car.scss';
import Topscroll from '../../Topscroll/Topscroll';
import car1 from '../../../assets/car/car1.avif';
import car2 from '../../../assets/car/car2.avif';
import car3 from '../../../assets/car/car3.avif';
import car4 from '../../../assets/car/car4.avif';
import car5 from '../../../assets/car/car5.avif';
import car6 from '../../../assets/car/car6.avif';
import car7 from '../../../assets/car/car7.avif';
import car8 from '../../../assets/car/car8.avif';
import car9 from '../../../assets/car/car9.avif';
import car10 from '../../../assets/car/car10.avif';
import car11 from '../../../assets/car/car11.avif';
import car12 from '../../../assets/car/car12.avif';
import car13 from '../../../assets/car/car13.avif';

const Car = () => {
    return(
        <section id='car'>
            <header>
                <h1>Car</h1>
                <h3>A collection of Dodge Charger SRT photographs.</h3>
            </header>
            <div className="car-flex-container">
                <figure className="car-flex-horizontal-box">
                    <a href={car2} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car2} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car1} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car1} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car4} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car4} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car8} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car8} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car11} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car11} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-horizontal-box">
                    <a href={car10} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car10} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-horizontal-box">
                    <a href={car6} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car6} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car7} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car7} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-vertical-box">
                    <a href={car9} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car9} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-rect-box">
                    <a href={car3} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car3} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-rect-box">
                    <a href={car12} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car12} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-rect-box">
                    <a href={car5} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car5} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="car-flex-rect-box">
                    <a href={car13} data-lightbox='car-pic' data-title='Dodge Charger SRT'>
                        <img src={car13} className='car-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br />
            <Topscroll />
        </section>
    );
};

export default Car;