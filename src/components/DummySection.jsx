import React from 'react';
import '../css/DummySection.css';

const dummyItems = [
    {
        title: 'Project Discovery',
        description: 'We dive deep into your brand, matching your goals with market research to define a winning strategy.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        )
    },
    {
        title: 'Strategic Planning',
        description: 'A detailed roadmap of your project, from user flow architecture to technical specifications and milestones.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
            </svg>
        )
    },
    {
        title: 'Design Execution',
        description: 'Crafting premium visuals and high-fidelity prototypes that bring your brand to life with pixel-perfection.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.5 1.5"></path>
                <path d="M7.5 3.5L11 7"></path>
            </svg>
        )
    },
    {
        title: 'Launch & Growth',
        description: 'Rigorous testing followed by a seamless launch. We stay by your side to monitor performance and scale.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13"></path>
                <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
            </svg>
        )
    }
];

const DummySection = () => {
    return (
        <section className="dummy-section">
            <div className="dummy-header">
                <div className="process-label">Our Process</div>
                <h2 className="dummy-title">
                    From Concept to <span className="highlight">Creative Reality</span>
                </h2>
                <p className="dummy-intro">
                    We follow a structured roadmap designed to ensure excellence at every phase of your digital transformation.
                </p>
            </div>

            <div className="dummy-grid">
                {dummyItems.map((item, index) => (
                    <div key={index} className="dummy-card">
                        <div className="dummy-card-top">
                            <div className="dummy-card-number">{String(index + 1).padStart(2, '0')}</div>
                            <div className="dummy-card-icon">{item.icon}</div>
                        </div>
                        <h3 className="dummy-card-title">{item.title}</h3>
                        <p className="dummy-card-description">{item.description}</p>
                        <div className="card-footer-line"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DummySection;
