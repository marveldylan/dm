
const Nav = () => {


    return (
        <div className="Navbar">
            <img className="Logo" src={process.env.PUBLIC_URL + '/dm-logo-favicon.svg'} />
            <div className="Nav-links">
                <ul className="Nav-list">
                    <li className="Nav-link Dark-txt"><a href="">About</a></li>
                    <li className="Nav-link Dark-txt"><a href="">Work</a></li>
                    <li className="Nav-link Dark-txt"><a href="">Contact</a></li>
                    <li className="Nav-link Dark-txt"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing">Resume</a></li>
                </ul>
            </div>
            <div className="Nav-right">

            </div>
        </div>
    )
}

export default Nav;