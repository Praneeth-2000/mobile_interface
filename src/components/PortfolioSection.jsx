import React, { useState } from 'react';
import '../css/PortfolioSection.css';
import portfolioScreen from '../assets/images/portfolio-screen.png';
import accel1Logo from '../assets/images/accel1-logo.png';
import TestimonialPopup from './TestimonialPopup';
import html5Logo from '../assets/images/html5-logo.png';
import pythonLogo from '../assets/images/python-logo.png';
import reactLogo from '../assets/images/react-logo.png';

const PortfolioSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="portfolio-section">
            <p className="portfolio-description">
                We craft responsive, SEO-optimized websites that empower business transform their online presence.
            </p>

            <div className="laptop-showcase" onClick={() => setIsPopupOpen(true)} style={{ cursor: 'pointer' }}>
                <div className="laptop-frame">
                    <div className="laptop-screen">
                        <div className="screen-content">
                            <img src={portfolioScreen} alt="Project Screen" className="screen-image" />
                        </div>
                    </div>
                    <div className="laptop-base"></div>
                </div>

                <div className="nav-arrows">
                    <button className="arrow-btn">‹</button>
                    <span className="company-name">
                        <img src={accel1Logo} alt="ACCEL1" className="company-logo" />
                    </span>
                    <button className="arrow-btn">›</button>
                </div>
            </div>

            <div className="tech-stack">
                <div className="tech-badge react">
                    <img src={reactLogo} alt="React" className="tech-logo" />
                </div>
                <div className="tech-badge html">
                    <img src={html5Logo} alt="HTML5" className="tech-logo" />
                </div>
                <div className="tech-badge python">
                    <img src={pythonLogo} alt="Python" className="tech-logo" />
                </div>
            </div>

            <div className="info-card">
                <div className="hand-container hand-left">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="32" viewBox="0 0 26 32" fill="none">
                        <path d="M6.36796 28.2487C6.14994 26.2215 7.62993 24.3832 9.65494 24.1649L18.7654 23.1828C20.7904 22.9646 22.6268 24.4461 22.8448 26.4733C23.0628 28.5005 21.5828 30.3389 19.5578 30.5571L10.4473 31.5392C8.42233 31.7575 6.58597 30.2759 6.36796 28.2487Z" fill="#F4AEAE" />
                        <path d="M0.246795 13.647C0.00781807 11.41 1.63454 9.38697 3.86918 9.14354L20.8114 7.31782C23.046 7.07859 25.0669 8.70704 25.31 10.9441C25.549 13.1811 23.9223 15.2041 21.6876 15.4476L4.74543 17.2733C2.51079 17.5125 0.489964 15.8841 0.246795 13.647Z" fill="#F4AEAE" />
                        <path d="M-0.520432 6.0923C-0.759409 3.85525 0.867311 1.83226 3.10195 1.58883L17.646 0.0233245C19.8806 -0.21591 21.9015 1.41257 22.1446 3.64962C22.3836 5.88666 20.7569 7.90965 18.5223 8.15308L3.9782 9.71859C1.74356 9.95782 -0.277263 8.32935 -0.520432 6.0923Z" fill="#F4AEAE" />
                        <path d="M2.99713 21.4536C2.75815 19.2165 4.38487 17.1936 6.61952 16.9501L21.1636 15.3846C23.3982 15.1454 25.419 16.7738 25.6622 19.0109C25.9012 21.2479 24.2745 23.2709 22.0398 23.5143L7.49576 25.0799C5.26112 25.3191 3.2403 23.6906 2.99713 21.4536Z" fill="#F4AEAE" />
                    </svg>
                </div>
                <div className="hand-container hand-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="34" viewBox="0 0 25 34" fill="none">
                        <path d="M24.2512 26.0611C23.6852 24.1011 21.6183 22.9636 19.6603 23.5344L10.8601 26.0905C8.90214 26.6571 7.76597 28.7262 8.33616 30.6863C8.90216 32.6463 10.9691 33.7837 12.927 33.2129L21.7273 30.6569C23.6852 30.0903 24.8214 28.0211 24.2512 26.0611Z" fill="#F4AEAE" />
                        <path d="M24.3728 10.2296C23.7481 8.0723 21.4715 6.81736 19.3123 7.44273L2.94451 12.198C0.789529 12.8234 -0.464058 15.1024 0.160636 17.2639C0.78533 19.4212 3.0619 20.6762 5.22108 20.0508L21.5889 15.2955C23.7439 14.6701 24.9975 12.3911 24.3728 10.2296Z" fill="#F4AEAE" />
                        <path d="M22.2136 2.94773C21.5889 0.790428 19.3123 -0.464495 17.1531 0.160871L3.10379 4.24043C0.948807 4.8658 -0.304754 7.14482 0.31994 9.30632C0.944634 11.4636 3.22121 12.7186 5.38038 12.0932L19.4297 8.01362C21.5847 7.38825 22.8383 5.10923 22.2136 2.94773Z" fill="#F4AEAE" />
                        <path d="M24.7921 18.4938C24.1674 16.3365 21.8908 15.0815 19.7316 15.7069L5.68228 19.7865C3.52729 20.4118 2.2737 22.6908 2.8984 24.8524C3.52309 27.0097 5.79967 28.2646 7.95884 27.6392L22.0082 23.5597C24.1632 22.9343 25.4167 20.6553 24.7921 18.4938Z" fill="#F4AEAE" />
                    </svg>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                </p>
            </div>

            {/* Testimonial Popup Component */}
            {isPopupOpen && <TestimonialPopup onClose={() => setIsPopupOpen(false)} />}
        </div>
    );
};

export default PortfolioSection;
