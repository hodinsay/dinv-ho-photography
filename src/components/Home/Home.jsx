import './Home.scss';
import Topscroll from '../Topscroll/Topscroll';
import home1 from '../../assets/home/home1.avif';
import home2 from '../../assets/home/home2.avif';
import home3 from '../../assets/home/home3.jpeg';
import home4 from '../../assets/home/home4.avif';
import home10 from '../../assets/home/home10.avif';
import home6 from '../../assets/home/home6.avif';
import home5 from '../../assets/home/home5.avif';
import home7 from '../../assets/home/home7.avif';

const Home = () => {
    return(
        <section id='home'>
            <header>
                <h1>Freelance Photographer based in San Francisco, California.</h1>
                <h3>Browse my portfolio collections.</h3>
            </header>
            <div className='flex-grid-container'>
                <div className='flex-grid-box'>
                    <figure className='flex-grid-three-top'>
                        <a href={home1} data-lightbox='home-pic' data-title='Landscape'>
                            <img src={home1} loading='lazy'/>
                        </a>
                        <a href='/landscape' className='link'>Landscape</a>
                    </figure>
                    <figure className='flex-grid-three-bottom'>
                        <a href={home2} data-lightbox='home-pic' data-title='Portrait'>
                            <img src={home2} loading='lazy'/>
                        </a>
                        <a href='/portrait' className='link'>Portrait</a>
                    </figure>
                </div>
                <div className='flex-grid-box'>
                    <figure className='flex-grid-two-top'>
                        <a href={home3} data-lightbox='home-pic' data-title='City'>
                            <img src={home3} loading='lazy'/>
                        </a>
                        <a href='/city' className='link'>City</a>
                    </figure>
                    <figure className='flex-grid-two-bottom'>
                        <a href={home4} data-lightbox='home-pic' data-title='Wedding'>
                            <img src={home4} loading='lazy'/>
                        </a>
                        <a href='/wedding' className='link'>Wedding</a>
                    </figure>
                </div>
                <div className='flex-grid-box'>
                    <figure className='flex-grid-three-top'>
                        <a href={home10} data-lightbox='home-pic' data-title='Food'>
                            <img src={home10} loading='lazy'/>
                        </a>
                        <a href='/food' className='link'>Food</a>
                    </figure>
                    <figure className='flex-grid-three-bottom'>
                        <a href={home6} data-lightbox='home-pic' data-title='People'>
                            <img src={home6} loading='lazy'/>
                        </a>
                        <a href='/people' className='link'>People</a>
                    </figure>
                </div>
                <div className='flex-grid-box'>
                    <figure className='flex-grid-two-top'>
                        <a href={home5} data-lightbox='home-pic' data-title='Animal'>
                            <img src={home5} loading='lazy'/>
                        </a>
                        <a href='/animal' className='link'>Animal</a>
                    </figure>
                    <figure className='flex-grid-two-bottom'>
                        <a href={home7} data-lightbox='home-pic' data-title='Car'>
                            <img src={home7} loading='lazy'/>
                        </a>
                        <a href='/car' className='link'>Car</a>
                    </figure>
                </div>
            </div>
            <br/>
            <Topscroll />
        </section>
    );
};

export default Home;