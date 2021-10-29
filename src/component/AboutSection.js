import react from "react";
import home1 from '../img/home1.png';
import { About, Desc, Img, Hide } from "../styles";
//components
import Wave from "./Wave.js";
//framer motion 
import {motion} from 'framer-motion';
//animation 
import {titleAnim, move, photoAnim} from '../animation';

const AboutSection = () => {

    return (
        <About>
            <Desc>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show'>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show'>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim} initial='hidden' animate='show'>come true.</motion.h2>
                    </Hide>
                </motion.div>
                <Hide>
                    <motion.p variants={move} initial='hidden' animate='show'>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                </Hide>
                <Hide>
                    <motion.button variants={move} initial='hidden' animate='show'>Contact Us</motion.button>
                </Hide>
            </Desc>
            <Img>
                <motion.img src={home1} alt="guy with a camera" variants={photoAnim} initial='hidden' animate='show' />
            </Img>
            <Wave />
        </About>
    );
}

export default AboutSection;