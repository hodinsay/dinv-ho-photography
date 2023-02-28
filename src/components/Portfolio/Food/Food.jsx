import './Food.scss';
import Topscroll from '../../Topscroll/Topscroll';
import drink1 from '../../../assets/food/drink1.avif';
import drink2 from '../../../assets/food/drink2.avif';
import drink3 from '../../../assets/food/drink3.avif';
import drink4 from '../../../assets/food/drink4.avif';
import food1 from '../../../assets/food/food1.avif';
import food2 from '../../../assets/food/food2.avif';
import food3 from '../../../assets/food/food3.avif';
import food4 from '../../../assets/food/food4.avif';
import food5 from '../../../assets/food/food5.avif';
import food6 from '../../../assets/food/food6.avif';
import food7 from '../../../assets/food/food7.avif';
import food8 from '../../../assets/food/food8.avif';
import food9 from '../../../assets/food/food9.avif';
import food10 from '../../../assets/food/food10.avif';
import food11 from '../../../assets/food/food11.avif';

const Food = () => {
    return(
        <section id='food'>
            <header>
                <h1>Food</h1>
                <h3>A collection of Bay Area Food Photographs.</h3>
            </header>
            <div className="food-flex-container">
                <figure className="flex-vertical-box">
                    <a href={food9} data-lightbox='food-pic' data-title='Noodle'>
                        <img src={food9} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-vertical-box">
                    <a href={food10} data-lightbox='food-pic' data-title='Sushi'>
                        <img src={food10} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-horizontal-box">
                    <a href={drink1} data-lightbox='food-pic' data-title='Bamboo'>
                        <img src={drink1} className='food-horizontal' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-horizontal-box">
                    <a href={drink2} data-lightbox='food-pic' data-title='Black Sugar'>
                        <img src={drink2} className='food-horizontal' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-vertical-box">
                    <a href={food5} data-lightbox='food-pic' data-title='Banh Mi'>
                        <img src={food5} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-vertical-box">
                    <a href={food8} data-lightbox='food-pic' data-title='Steak'>
                        <img src={food8} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-vertical-box">
                    <a href={food11} data-lightbox='food-pic' data-title='Rice Bowl'>
                        <img src={food11} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-vertical-box">
                    <a href={drink3} data-lightbox='food-pic' data-title='Taste Tea'>
                        <img src={drink3} className='food-vertical' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-horizontal-box">
                    <a href={food1} data-lightbox='food-pic' data-title='Ramen'>
                        <img src={food1} className='food-horizontal' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={food2} data-lightbox='food-pic' data-title='Food Spread'>
                        <img src={food2} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={food3} data-lightbox='food-pic' data-title='Duck Noodle'>
                        <img src={food3} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={food4} data-lightbox='food-pic' data-title='Vermicelli'>
                        <img src={food4} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={drink4} data-lightbox='food-pic' data-title='Boba'>
                        <img src={drink4} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={food6} data-lightbox='food-pic' data-title='Fried Chicken'>
                        <img src={food6} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="flex-square-box">
                    <a href={food7} data-lightbox='food-pic' data-title='Chicken Noodle'>
                        <img src={food7} className='food-square' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br />
            <Topscroll />
        </section>
    );
};

export default Food;