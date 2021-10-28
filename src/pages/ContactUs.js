import React from "react";
//animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const ContactUs = () => {
    return (
        <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <h1>Contact us</h1>
        </motion.div>
    );
}

export default ContactUs;