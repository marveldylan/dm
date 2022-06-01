import { Parallax } from "react-scroll-parallax";

const About = () => {


    return (
            <div className="Dark">
                <Parallax className="About-container Dark" id="about" speed={10}>
                    <div></div>
                    <div className='About-content Light'>
                        <div className='About-info'>
                            <h2 className="About-header Light">About Me</h2>
                            <p className="About-p-1">Hey there! My name is Dylan and I like to make things; when I graduated college with a degree in Chemistry, those things were usually made within a beaker. Now, I make things for the internet!</p>
                            <img className="Chemistry-logo" src={process.env.PUBLIC_URL + "flask.svg"} alt="mail" />
                            <p className="About-p-2">I learned a lot while working in the chemical industry, and met many wonderful people along the way. However, I had always been interested in software development, and I've always been especially drawn to those rare intersections of technical skill and creative thinking. Fast-forward a few years, and I’m now a driven software engineer with experience building full stack MERN, PERN, and Django applications!</p>
                        </div>
                        <div className='Skills-content Light'>
                            <h2 className="Skills-header">Skills</h2>
                            <div className="Skills-container Dark">
                                <p>Front End</p>
                                <div className="Front-end Light">
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                        <p className="Skill-name">HTML5</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                        <p className="Skill-name">CSS3</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                        <p className="Skill-name">JavaScript</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-react-native.svg"} alt="React.js" />
                                        <p className="Skill-name">React.js</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-redux.svg"} alt="React.js" />
                                        <p className="Skill-name">Redux</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-nodejs.svg"} alt="Node.js" />
                                        <p className="Skill-name">Node.js</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills-container Dark">
                                <p>Back End</p>
                                <div className="Back-end Light">
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-mongodb.svg"} alt="MongoDB" />
                                        <p className="Skill-name">MongoDB</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-sql-60.png"} alt="SQL" />
                                        <p className="Skill-name">SQL</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-circled-e-50.png"} alt="Express.js" />
                                        <p className="Skill-name">Express.js</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-postgresql.svg"} alt="PostgreSQL" />
                                        <p className="Skill-name">PostgreSQL</p>
                                    </div>
                                </div>
                            </div>
                            <div className="Skills-container Dark">
                                <p>Other</p>
                                <div className="Other Light">
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-heroku.svg"} alt="Heroku" />
                                        <p className="Skill-name">Heroku</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-json-web-token.svg"} alt="JWT Auth" />
                                        <p className="Skill-name">JSON Web Token</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-python.svg"} alt="Python" />
                                        <p className="Skill-name">Python</p>
                                    </div>
                                    <div className="Skill-badge">
                                        <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-django.svg"} alt="Django" />
                                        <p className="Skill-name">Django</p>
                                    </div>
                                </div>                           
                            </div>
                    </div>
                    </div>
                    <div></div>
                </Parallax>
            </div>

    )
}

export default About;