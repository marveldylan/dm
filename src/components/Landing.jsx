import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import Nav from './Nav';

const Landing = () => {


    return (
        <div className="Landing-container" id="home">
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
                                <p className="Landing-greeting Dark-txt">Howdy, my name is</p>
                                <h1 className="Landing-name Super-light-txt">Dylan Marvel.</h1>
                                <p className="Landing-p-1 Dark-txt">I’m a full stack web developer.</p>
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