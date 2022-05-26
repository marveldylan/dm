import { Parallax } from "react-scroll-parallax";

const About = () => {


    return (
            <div className="Dark">
                <Parallax className="About-container Dark" id="about" speed={10}>
                    <div></div>
                    <div className='About-content'>
                        <div className='About-info'>
                            <h2 className="About-header Dark">About Me</h2>
                            <p className="About-p-1">Hey there! My name is Dylan and I like to make things. When I was a kid those things were mostly made with Lego bricks and a young boy's imaginings. Now they're made with sweat, computer speak and a slightly older boy's dreams!</p>
                            <p className="About-p-2">I’m a driven full stack web developer with a background in physical science. Whether I’m building JavaScript applications or formulating chemical products, I approach each new challenge with a technical mindset and willingness to experiment!</p>
                        </div>
                        <div className='Skills-content Dark'>
                        <h2 className="Skills-header">Skills</h2>
                        <p>Front End</p>
                        <div className="Front-end">
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                <p className="Skill-name">HTML5</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                <p className="Skill-name">CSS3</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                <p className="Skill-name">JavaScript</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-react-native.svg"} alt="React.js" />
                                <p className="Skill-name">React.js</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-nodejs.svg"} alt="Node.js" />
                                <p className="Skill-name">Node.js</p>
                            </div>


                        </div>
                        <p>Back End</p>
                        <div className="Back-end">
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-mongodb.svg"} alt="MongoDB" />
                                <p className="Skill-name">MongoDB</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-sql-60.png"} alt="SQL" />
                                <p className="Skill-name">SQL</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-circled-e-50.png"} alt="Express.js" />
                                <p className="Skill-name">Express.js</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-postgresql.svg"} alt="PostgreSQL" />
                                <p className="Skill-name">PostgreSQL</p>
                            </div>

                        </div>
                        <p>Other</p>
                        <div className="Other">
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-heroku.svg"} alt="Heroku" />
                                <p className="Skill-name">Heroku</p>
                            </div>
                            <div className="Skill-badge">
                                <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-json-web-token.svg"} alt="JWT Auth" />
                                <p className="Skill-name">JSON Web Token (JWT)</p>
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