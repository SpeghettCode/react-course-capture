import react from "react";
import home1 from '../img/home1.png';
import { About, Desc, Img, Hide } from "../styles";
//components
import Wave from "./Wave.js";
//framer motion 
import {motion} from 'framer-motion';
//animation 
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = () => {

    return (
        <About>
            <Desc>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>come true.</motion.h2>
                    </Hide>
                </motion.div>

                <motion.p variants={fade}>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </Desc>
            <Img>
                <motion.img src={home1} alt="guy with a camera" variants={photoAnim} />
            </Img>
            <Wave />
        </About>
    );
}

export default AboutSection;