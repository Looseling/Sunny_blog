import React from 'react';
import {
    AboutSection,
    ArticlesSection,
    ContactSection,
    HeroSection,
    InterestsSection,
    Page,
    ProjectsSection,
    Seo,
    Section
} from 'gatsby-theme-portfolio-minimal';

export default function IndexPage() {
    return (
        <>
            <Seo title="Welcome" />
            <Page useSplashScreenAnimation>
                <HeroSection sectionId="hero" />
                <AboutSection sectionId="about" heading="About me" />
                <AboutSection sectionId="about2" />

                <ArticlesSection sectionId="articles" heading="My Latest Articles" sources={['Blog']} />
                <InterestsSection sectionId="details" heading="Skills" /> 
                {/* <ProjectsSection sectionId="features" heading="about me" /> */}
                {/* <ContactSection sectionId="github" heading="Issues?" /> */}
                <Section anchor="Projects" heading="Projects: Under Construction 🚧🔨⚙️"/>
            </Page>
        </>
    );
}
