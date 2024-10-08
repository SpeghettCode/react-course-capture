import react from "react";
// import components
import AboutSection from "../component/AboutSection";
import ServicesSection from '../component/ServicesSection';
import FaqSection from '../component/FaqSection';
import ScrollTop from "../component/ScrollTop";
//animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const AboutUs = () => {
    return (
        <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <ScrollTop />
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    )
}

export default AboutUs;