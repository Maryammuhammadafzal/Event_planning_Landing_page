import FeaturesPage from "./Features/Page";
import AboutPage from "./About/Page";
import ServicesPage from "./Services/Page";
import PortfolioPage from "./Portfolio/Page";
import TestimonialPage from "./Testimonial/Page";
import ContactPage from "./Contact/Page";

export default function Home() {
  return (
   <div>
    <FeaturesPage/>
    <AboutPage/>
    <ServicesPage/>
    <PortfolioPage/>
    <TestimonialPage/>
    <ContactPage/>
   </div>
  );
}
