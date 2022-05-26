const MobileNav = () => {

    const anchor = document.querySelector('#home')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest'})

    return (
        <div className="Mobile-navbar Dark">
            <a href="#home"><img className="Logo" src={process.env.PUBLIC_URL + '/dm-logo-favicon.svg'} /></a>
            <div className="Mobile-nav-links">
                <ul className="Nav-list">
                    <li className="Nav-link Light-txt"><a href="#about">About</a></li>
                    <li className="Nav-link Light-txt"><a href="#work">Work</a></li>
                    <li className="Nav-link Light-txt"><a href="#contact">Contact</a></li>
                    <li className="Nav-link Light-txt"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </div>
            <div className="Nav-right">

            </div>
        </div>
    )
}

export default MobileNav;