const MobileNav = () => {

    const anchor = document.querySelector('#About')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })

    return (
        <div className="Mobile-navbar Dark">
            <img className="Logo" src={process.env.PUBLIC_URL + '/dm-logo-favicon.svg'} />
            <div className="Mobile-nav-links">
                <ul className="Nav-list">
                    <li className="Nav-link Light-txt"><a href="#About">About</a></li>
                    <li className="Nav-link Light-txt"><a href="#Work">Work</a></li>
                    <li className="Nav-link Light-txt"><a href="#Contact">Contact</a></li>
                    <li className="Nav-link Light-txt"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </div>
            <div className="Nav-right">

            </div>
        </div>
    )
}

export default MobileNav;