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
                                <p className="Landing-p-1">I’m a driven full stack web developer with a background in physical science. Whether I’m building JavaScript applications or formulating chemical products, I approach each new challenge with a technical mindset and willingness to experiment!</p>
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