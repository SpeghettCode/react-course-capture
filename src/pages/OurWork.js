import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ScrollTop from "../component/ScrollTop";
// images
import athlete from '../img/athlete-small.png'; 
import theracer from '../img/theracer-small.png'; 
import goodtimes from '../img/goodtimes-small.png'; 
//animation
import {motion} from 'framer-motion';
import {pageAnim, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animation';
import {useScroll} from '../component/useScroll';

const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <Work variants={pageAnim} initial="hidden" animate="show" exit="exit" >

            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>

            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="boxer leaning over the ropes of a boxing ring" />
                    </Hide>
                </Link>
            </Movie>
            <Movie ref={element} variants={fade} animate={controls} initial='hidden'>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="women leaning against yellow car" />
                </Link>
            </Movie>
            <Movie ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="couple hugging under trees by the ocean" />
                </Link>
            </Movie>
            <ScrollTop />
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0rem;
        color: #fff;
    }
`;

const Movie = styled(motion.div)`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

//frame animation 
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #c4c4c4;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #969696;
`;

const Frame3 = styled(Frame1)`
    background: #6e6e6e;
`;

const Frame4 = styled(Frame1)`
    background: #464646;
`;

export default OurWork;