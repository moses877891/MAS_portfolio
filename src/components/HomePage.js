import React from 'react';
import Title from './Title';
import SkillsSection from './SkillsSection';
import ProjectSection from './ProjectSection'
import About from './About';

function HomePage() {
    return (
        <div>
            <Title firstName="MOSES" lastName=" Antony Shankar. S" leadText="3rd year- B.E Student" />
            <SkillsSection />
            <ProjectSection />
            <About />
        </div>
    );
}

export default HomePage;