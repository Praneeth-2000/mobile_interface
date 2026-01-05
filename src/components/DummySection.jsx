import React from 'react';
import './DummySection.css';

const dummyItems = [
    {
        title: 'Project Discovery',
        description: 'Understanding your goals and target audience through deep research and analysis.'
    },
    {
        title: 'Strategic Planning',
        description: 'Creating a roadmap for success with clear objectives and measurable outcomes.'
    },
    {
        title: 'Design Execution',
        description: 'Crafting premium visuals and interfaces that resonate with your brand identity.'
    },
    {
        title: 'Quality Assurance',
        description: 'Rigorous testing to ensure every detail meets our high standards of excellence.'
    }
];

const DummySection = () => {
    return (
        <section className="dummy-section">
            <div className="dummy-header">
                <h2 className="dummy-title">Our Process</h2>
                <p className="dummy-intro">
                    A brief look at how we bring your vision to life through structured phases and meticulous attention to detail.
                </p>
            </div>

            <div className="dummy-grid">
                {dummyItems.map((item, index) => (
                    <div key={index} className="dummy-card">
                        <div className="dummy-card-number">{String(index + 1).padStart(2, '0')}</div>
                        <h3 className="dummy-card-title">{item.title}</h3>
                        <p className="dummy-card-description">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DummySection;
