import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";

const MobileNav = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    // const ScrollToBottom = () => {
    //     window.scrollIntoView({
            
    //     })
    // }

    return (
        <div className="Mobile-navbar Dark">
            <div className="Mobile-nav-links">
                <ul className="Mobile-nav-list">
                    <li className="Mobile-nav-link Light-txt"><a href="#about">About</a></li>
                    <li className="Mobile-nav-link Light-txt"><a href="#work">Work</a></li>
                    <li><img onClick={()=>scrollToTop()}className="Mobile-logo" src={process.env.PUBLIC_URL + '/dm-logo-mobile-favicon.svg'} /></li>
                    <li className="Mobile-nav-link Light-txt"><a href="#contact">Contact</a></li>
                    <li className="Mobile-nav-link Light-txt"><a href="https://drive.google.com/file/d/1M5Jnx-TE6BZnAPaAcnOSVAflDBeBKcG7/view?usp=sharing" target="_blank">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileNav;