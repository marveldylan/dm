
const Nav = () => {


    return (
        <div className="navbar">
            <img className="logo" src={process.env.PUBLIC_URL + '/dm-logo-lg-white-green.svg'} />
            <div className="nav-links">
                <ul className="nav-list">
                    <li className="nav-link"><a href="">About</a></li>
                    <li className="nav-link"><a href="">Work</a></li>
                    <li className="nav-link"><a href="">Contact</a></li>
                    <li className="nav-link"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing">Resume</a></li>
                </ul>
            </div>
            <div className="nav-right">

            </div>
        </div>
    )
}

export default Nav;