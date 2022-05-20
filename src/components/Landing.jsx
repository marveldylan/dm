import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Nav from './Nav';

const Landing = () => {


    return (
        <div className="landing-container">
            <ParallaxBanner
                className="landing-banner"
                layers={[
                    {
                        image: 'https://i.imgur.com/yjWe8mZ.png',
                        class: 'image',
                        scale: [1, 1],
                        opacity: [1, 1],  
                        speed: -11
                    },
                    {
                        children:
                            <div className="landing-text-container">
                                <h1 className="landing-greeting">Howdy, my name is</h1>
                                <h1 className="landing-name">Dylan Marvel.</h1>
                                <p className="landing-p-1">I'm a budding full stack software engineer with a passion for creating compelling new experiences on the web. I recently finished a software engineering apprenticeship with General Assembly, and I'm steering my ship towards exciting new horizons.</p>
                            </div>, 
                            speed: 15
                    },
                    {
                        children: 
                            <Nav />,
                            speed: -2
                    }
                ]}
            />
        </div>
       
    )
}

export default Landing;