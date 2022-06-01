import { Parallax } from "react-scroll-parallax";

const Work = () => {


    return (
            <div className="Dark">
                <Parallax className="Work-container Dark" id="work" speed={10}>
                    <div></div>
                    <div className="Work-content">
                        <h2 className="Work-header Dark">Projects</h2>
                        <div className="Project-grid">
                            <div className="Project-card Light">
                                <a href="https://youtu.be/ejuek348lJM" target="_blank"><img className="Project-image-l" src="https://i.imgur.com/ZvsBDKf.png" /></a>
                                {/* <iframe className="Project-image-l" src="https://www.youtube.com/embed/ejuek348lJM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe> */}
                                <div className="Project-about-r">
                                    <h1 className="Project-title Color-txt">Project_Indigo</h1>
                                    <p className="Project-description">May 2022 - Capstone Project (Sole Developer). Built and deployed within 10 days. </p>
                                    <p className="Project-description">Social media application for sharing information and building communities around hobbies and crafts - features user profiles, custom posts and comments, and a novel system for reviewing content. Allows for creating and disbanding groups and channels, along with complex rules for displaying posts and comments.</p>
                                    <div className="Project-links">
                                        <a href="https://project-indigo-front-end.herokuapp.com/" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-rocket-50.png"} alt="HTML" />
                                                <p className="P-name Dark-txt">Deployment</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/marveldylan/indigo-front-end" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">Front-End</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/marveldylan/indigo-back-end" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">Back-End</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="Project-tech-r Light">
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-mongodb.svg"} alt="MongoDB" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-circled-e-50.png"} alt="Express.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-react-native.svg"} alt="React.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-nodejs.svg"} alt="Node.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-json-web-token.svg"} alt="JWT Auth" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-heroku.svg"} alt="Heroku" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                </div>
                            </div>
                            <div className="Project-card Light">
                                <a href="https://youtu.be/KOCCQ1StCc4" target="_blank"><img className="Project-image-r" src="https://i.imgur.com/gt9SXx7.png" /></a>
                                {/* <iframe className="Project-image-r" src="https://www.youtube.com/embed/KOCCQ1StCc4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe> */}
                                <div className="Project-about-l">
                                    <h1 className="Project-title Color-txt">Medici</h1>
                                    <p className="Project-description">April 2022 - Project 2 (Sole Developer). Built and deployed within 4 days.</p>
                                    <p className="Project-description">Mock nft-commerce website for primary sale between store-fronts/collections and buyer -  features user and shop profiles for listing owned NFTs, a buying mechanism for transferring ownership, and novel viewport layout for viewing owned items.</p>
                                    <div className="Project-links Dark-txt">
                                        <a href="https://sleepy-inlet-25052.herokuapp.com/" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-rocket-50.png"} alt="HTML" />
                                                <p className="P-name Dark-txt">Deployment</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/marveldylan/medici" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">GitHub</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="Project-tech-l Light">
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-mongodb.svg"} alt="MongoDB" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-circled-e-50.png"} alt="Express.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-react-native.svg"} alt="React.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-nodejs.svg"} alt="Node.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-heroku.svg"} alt="Heroku" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                </div>
                            </div>
                            <div className="Project-card Light">
                                <a href="https://youtu.be/MsyVVXxM12E" target="_blank"><img className="Project-image-l" src="https://i.imgur.com/KElSfT9.jpg" /></a>
                                {/* <iframe className="Project-image-l" src="https://www.youtube.com/embed/MsyVVXxM12E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe> */}
                                <div className="Project-about-r">
                                    <h1 className="Project-title Color-txt">Duemila-Ruote</h1>
                                    <p className="Project-description">April 2022 - Project 3 (Collaborative). Built and deployed with a team of four developers within 7 days.</p>
                                    <p className="Project-description">A web application focused on viewing, buying, selling, and modding luxury cars - features a garage webpage for viewing owned cars and mod parts, as well as a public lot listing cars for sale.  Allows users to mod cars with owned parts and view how stats increase accordingly.</p>
                                    <div className="Project-links Dark-txt">
                                        <a href="https://ancient-atoll-31198.herokuapp.com/" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-rocket-50.png"} alt="HTML" />
                                                <p className="P-name Dark-txt">Deployment</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/ayyyecraig/turismo-front-end" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">Front-End</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/kibathi218/Carvana-Clone-Formula2-GranTurismo-SOmethingElse" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">Back-End</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="Project-tech-r Light">
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-postgresql.svg"} alt="PostgreSQL" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-sql-60.png"} alt="SQL" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-circled-e-50.png"} alt="Express.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-react-native.svg"} alt="React.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-nodejs.svg"} alt="Node.js" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-json-web-token.svg"} alt="JWT Auth" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-heroku.svg"} alt="Heroku" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                </div>
                            </div>
                            <div className="Project-card Light">
                                <a href="https://youtu.be/I4Ho_TDmAdE" target="_blank"><img className="Project-image-r" src="https://i.imgur.com/nwbcNb9.png"/></a>
                                {/* <iframe className="Project-image-r" src="https://www.youtube.com/embed/I4Ho_TDmAdE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe> */}
                                <div className="Project-about-l">
                                    <h1 className="Project-title Color-txt">BATTLEDUCKS</h1>
                                    <p className="Project-description">March 2022 - Project 1 (Sole Developer). Built and deployed within 4 days.</p>
                                    <p className="Project-description">Drag-and-drop two-player card game built from scratch utilizing HTML, CSS, JavaScript. BATTLEDUCKS features custom pixel assets and functions for game initialization, multiple player actions, and win-condition checks.</p>
                                    <div className="Project-links Dark-txt">
                                        <a href="https://battleducks-dm.surge.sh/" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-rocket-50.png"} alt="HTML" />
                                                <p className="P-name Dark-txt">Deployment</p>
                                            </div>
                                        </a>
                                        <a href="https://github.com/marveldylan/BATTLEDUCKS" target="_blank">
                                            <div className="P-badge">
                                                <img className="P-logo" src={process.env.PUBLIC_URL + "icons8-github.svg"} alt="gitHub" />
                                                <p className="P-name Dark-txt">GitHub</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className="Project-tech-l Light">
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                                    <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </Parallax>
            </div>
    )
}

export default Work;