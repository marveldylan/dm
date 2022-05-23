import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Nav from './Nav';

const Landing = () => {


    return (
        <div className="Landing-container">
            <ParallaxBanner
                className="Landing-banner"
                layers={[
                    {
                        image: 'https://i.imgur.com/yjWe8mZ.png',
                        scale: [1, 1],
                        opacity: [1, 1],  
                        speed: -11
                    },
                    {
                        children:
                            <div className="Landing-text-container">
                                <h1 className="Landing-greeting">Howdy, my name is</h1>
                                <h1 className="Landing-name">Dylan Marvel.</h1>
                                <p className="Landing-p-1">I'm a budding full stack software engineer with a passion for creating compelling new experiences on the web. I recently finished a software engineering apprenticeship with General Assembly, and I'm steering my ship towards exciting new horizons.</p>
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