import React from "react";
//animation
import {motion} from 'framer-motion';
import {pageAnim, titleAnim, contactPhotoAnim} from '../animation';
import styled from 'styled-components';
import {Img} from '../styles';
import contact from '../img/contact.jpg';
 
const ContactUs = () => {
    return (
        <ContactStyle variants={pageAnim} initial="hidden" animate="show" exit="exit">
            <div>
                <Title>
                    <Hide>
                        <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                    </Hide>
                </Title>
                <div>
                    <Hide>
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Send us a message</h2>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Send an email</h2>
                        </Social>
                    </Hide>
                    <Hide>
                        <Social variants={titleAnim}>
                            <Circle />
                            <h2>Social media</h2>
                        </Social>
                    </Hide>      
                </div>
            </div>
            <ContactImg>
                <motion.img src={contact} alt="camera" variants={contactPhotoAnim} initial='hidden' animate='show' />
            </ContactImg>
        </ContactStyle>
    );
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #c0c0c0;
    min-height: 90vh;
    display: flex;
    align-items: center;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    color: #fff;
`;

const Hide = styled.div`
    overflow: hidden;
`;

const Circle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #c0c0c0;
`;

const Social = styled(motion.div)`
    display: flex;
    align-items: center;
    cursor: pointer;

    h2 {
        margin: 2rem;
    }
`;

const ContactImg = styled(Img)`
    margin-left: 5rem;
`;

export default ContactUs;