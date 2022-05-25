

const Work = () => {


    return (
        <div className="Work-container">
            <div></div>
            <div className="Work-content">
                <h1 className="Work-header">Projects</h1>
                <div className="Project-grid">
                    <div className="Project-card">
                        <img className="Project-image" src="https://i.imgur.com/ZvsBDKf.png" />
                        <div className="Project-about">
                            <p className="Project-title">Project_Indigo</p>
                            <p className="Project-description">Social media application for sharing information and building communities around hobbies and crafts - features user profiles, custom posts and comments, and a novel system for reviewing content. Allows for creating and disbanding groups and channels, along with complex rules for displaying posts and comments.</p>
                            <div className="Project-links">
                                <p className="Link"><a href="https://project-indigo-front-end.herokuapp.com/">Deployed Project</a></p>
                                <p className="Link"><a href="https://github.com/marveldylan/indigo-front-end">Github Front End</a></p>
                                <p className="Link"><a href="https://github.com/marveldylan/indigo-back-end">Github Back End</a></p>
                            </div>
                        </div>
                        <div className="Project-tech">
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
                    <div className="Project-card">
                        {/* <img className="Project-image" src="https://i.imgur.com/gt9SXx7.png" /> */}
                        <iframe className="Project-image" src="https://www.youtube.com/embed/KOCCQ1StCc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <div className="Project-about">
                            <p className="Project-title">Medici</p>
                            <p className="Project-description">Mock nft-commerce website for primary sale between store-fronts/collections and buyer -  features user and shop profiles for listing owned NFTs, a buying mechanism for transferring ownership, and novel viewport layout for viewing owned items.</p>
                            <div className="Project-links">
                                <p className="Link"><a href="https://sleepy-inlet-25052.herokuapp.com/">Deployed Project</a></p>
                                <p className="Link"><a href="https://github.com/marveldylan/medici">Github</a></p>
                            </div>
                        </div>
                        <div className="Project-tech">
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
                    <div className="Project-card">
                        {/* <img className="Project-image" src="https://i.imgur.com/KElSfT9.jpg" /> */}
                        <iframe className="Project-image" src="https://www.youtube.com/embed/MsyVVXxM12E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <div className="Project-about">
                            <p className="Project-title">Duemila-Ruote</p>
                            <p className="Project-description">A web application focused on viewing, buying, selling, and modding luxury cars - features a garage webpage for viewing owned cars and mod parts, as well as a public lot listing cars for sale.  Allows users to mod cars with with owned parts and view how stats increase accordingly.</p>
                            <div className="Project-links">
                                <p className="Link"><a href="https://ancient-atoll-31198.herokuapp.com/">Deployed Project</a></p>
                                <p className="Link"><a href="https://github.com/ayyyecraig/turismo-front-end">Github Front End</a></p>
                                <p className="Link"><a href="https://github.com/kibathi218/Carvana-Clone-Formula2-GranTurismo-SOmethingElse">Github Back End</a></p>
                            </div>
                        </div>
                        <div className="Project-tech">
                            <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-postgresql.svg"} alt="PostgreSQL" />
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
                    <div className="Project-card">
                        {/* <img className="Project-image" src="https://i.imgur.com/nwbcNb9.png"/> */}
                        <iframe className="Project-image" src="https://www.youtube.com/embed/I4Ho_TDmAdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>
                        <div className="Project-about">
                            <p className="Project-title">BATTLEDUCKS</p>
                            <p className="Project-description">Drag-and-drop two-player card game built from scratch utilizing HTML, CSS, JavaScript. BATTLEDUCKS features custom pixel assets and functions for game initialization, multiple player actions, and win-condition checks.</p>
                            <div className="Project-links">
                                <p className="Link"><a href="https://battleducks-dm.surge.sh/">Deployed Project</a></p>
                                <p className="Link"><a href="https://github.com/marveldylan/BATTLEDUCKS">Github</a></p>
                            </div>
                        </div>
                        <div className="Project-tech">
                            <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-html-5.svg"} alt="HTML" />
                            <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-css3.svg"} alt="CSS" />
                            <img className="Tech-logo" src={process.env.PUBLIC_URL + "icons8-javascript.svg"} alt="JavaScript" />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Work;