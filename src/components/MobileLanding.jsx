import { Parallax } from "react-scroll-parallax";

const MobileLanding = () => {

    return (
        <Parallax className="Mobile-parallax" id="home" speed={-30}>
            <div className="Mobile-landing Light">
                <div className="Mobile-text-container">
                    <p className="Mobile-greeting">Howdy, my name is</p>
                    <h2 className="Mobile-name Color-txt">Dylan Marvel.</h2>
                    <p className="Mobile-info">I’m a full stack web developer.</p>
                </div>
                <img className="Mobile-image" src="https://i.imgur.com/vJ3z4uT.png" />
            </div>
        </Parallax>
    )
}

export default MobileLanding;