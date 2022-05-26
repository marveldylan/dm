import { Parallax } from "react-scroll-parallax";

const Contact = () => {


    return (
        <div className="Dark">
            <Parallax className="Contact-container" id="Contact" speed={-30}>
                <div></div>
                <div className="Contact-content Light">
                    <h2>Contact Me</h2>
                    <p>Send me a message:</p>
                    <a href="mailto:marvel.dylan.james@gmail.com" target="_blank"><img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-mail.svg"} alt="mail" /></a>
                    <p> - or - </p>
                    <p className="Resume Light"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing" target="_blank">View Resume</a></p>
                    <p>I think we'll get along <span className="Italics">marvelously.</span></p>
                    <div className="Socials Dark">
                        <p className="Socials-label">Let's Connect!</p>
                        <div className="Socials-icons Light">
                            <a href="https://www.linkedin.com/in/dylan-marvel/" target="_blank"><img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-linkedin.svg"} alt="linkedin" /></a>
                            <a href="https://github.com/marveldylan" target="_blank"><img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="github" /></a>
                            <a href="https://www.instagram.com/dmarvel77/" target="_blank"><img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-instagram.svg"} alt="instagram" /></a>
                            <a href="https://twitter.com/dmarv77/" target="_blank"><img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-twitter.svg"} alt="twitter" /></a>
                        </div>
                    </div>
                </div>
                <div></div>
                
                </Parallax>
        </div>
    )
}

export default Contact;