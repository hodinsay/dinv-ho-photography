import './People.scss';
import Topscroll from '../../Topscroll/Topscroll';
import people1 from '../../../assets/people/people1.avif';
import people2 from '../../../assets/people/people2.avif';
import people3 from '../../../assets/people/people3.avif';
import people4 from '../../../assets/people/people4.avif';
import people5 from '../../../assets/people/people5.avif';
import people6 from '../../../assets/people/people6.avif';

const People = () => {
    return(
        <section id='people'>
            <header>
                <h1>People</h1>
                <h3>A collection of bay area resisdents photographs.</h3>
            </header>
            <div className="people-flex-container">
                <figure className="people-flex-vertical-box">
                    <a href={people1} data-lightbox='people-pic' data-title='First Picture'>
                        <img src={people1} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="people-flex-vertical-box">
                    <a href={people2} data-lightbox='people-pic' data-title='Second Picture'>
                        <img src={people2} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="people-flex-horizontal-box">
                    <a href={people3} data-lightbox='people-pic' data-title='Third Picture'>
                        <img src={people3} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="people-flex-horizontal-box">
                    <a href={people4} data-lightbox='people-pic' data-title='Fourth Picture'>
                        <img src={people4} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="people-flex-vertical-box">
                    <a href={people5} data-lightbox='people-pic' data-title='Fifth Picture'>
                        <img src={people5} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
                <figure className="people-flex-vertical-box">
                    <a href={people6} data-lightbox='people-pic' data-title='Sixth Picture'>
                        <img src={people6} className='people-box' loading='lazy'/>                        
                    </a>
                </figure>
            </div>
            <br />
            <Topscroll />
        </section>
    );
};

export default People;