import './Animal.scss';
import Topscroll from '../../Topscroll/Topscroll';
import animal1 from '../../../assets/animal/animal1.avif';
import animal2 from '../../../assets/animal/animal2.avif';
import animal3 from '../../../assets/animal/animal3.avif';
import animal4 from '../../../assets/animal/animal4.avif';
import animal5 from '../../../assets/animal/animal5.avif';
import animal7 from '../../../assets/animal/animal7.avif';

const Animal = () => {
    return(
        <section id='animal'>
            <header>
                <h1>Animal</h1>
                <h3>A collection of animals photograph.</h3>
            </header>
            <div className="animal-flex-container">
                <figure className="animal-flex-vertical-box">
                    <a href={animal1}data-lightbox='animal-pic' data-title='Cat'>
                        <img src={animal1} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="animal-flex-vertical-box">
                    <a href={animal2} data-lightbox='animal-pic' data-title='Horse'>
                        <img src={animal2} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="animal-flex-vertical-box">
                    <a href={animal3} data-lightbox='animal-pic' data-title='Reindeer'>
                        <img src={animal3} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="animal-flex-vertical-box">
                    <a href={animal4} data-lightbox='animal-pic' data-title='Swan'>
                        <img src={animal4} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="animal-flex-vertical-box">
                    <a href={animal5} data-lightbox='animal-pic' data-title='Giraffe'>
                        <img src={animal5} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="animal-flex-vertical-box">
                    <a href={animal7} data-lightbox='animal-pic' data-title='Goat'>
                        <img src={animal7} className='animal-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br />
            <Topscroll />
        </section>
    );
};

export default Animal;