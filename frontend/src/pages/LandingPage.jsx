import AboutSection from "../components/landing-page-components/about-section/AboutSection";
import EventsSection from "../components/landing-page-components/events-section/EventsSection";
import SuccessStories from "../components/landing-page-components/success-stories-section/SuccessStories";
import WelcomeSection from "../components/landing-page-components/welcome-section/WelcomeSection";

function LandingPage() {
    return (
        <div>
            <WelcomeSection />
            <AboutSection />
            <SuccessStories />
            <EventsSection />
        </div>
    )
}

export default LandingPage
