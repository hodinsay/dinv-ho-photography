import './About.scss';
import dinv from '../../assets/profile/dinv.avif';

const About = () => {

    return(
        <article id='about'>
            <header>
                <h1>About Me</h1>
            </header>
            <div className='about-flex-container'>
                <div className='about-summary'>
                    <div>
                        <p>
                            Hello and welcome to my photography website! My name is Din, and I am a professional photographer based in San Francisco, California. I have always had a passion for photography, and over the years, I have honed my skills and developed my unique style. Whether I am capturing the beauty of a landscape, the energy of a live event, or the emotions of a portrait, my goal is always to tell a story and create images that truly resonate with my clients. Through my lens, I aim to capture the essence of the moment and create memories that will last a lifetime. Thank you for taking the time to visit my website, and I hope you enjoy exploring my portfolio as much as I enjoyed creating it.
                        </p>
                    </div>
                </div>
                <div className='about-profile'>
                    <a href={dinv} data-lightbox='models' data-title='Din Ho'>
                        <img src={dinv} className='profile-pic' loading='lazy'/>                        
                    </a>
                </div>
            </div>
        </article>
    );
};

export default About;