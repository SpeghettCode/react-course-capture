import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
// images
import athlete from '../img/athlete-small.png'; 
import theracer from '../img/theracer-small.png'; 
import goodtimes from '../img/goodtimes-small.png'; 
//animation
import {motion} from 'framer-motion';
import {pageAnim} from '../animation';

const OurWork = () => {
    return (
        <Work variants={pageAnim} initial="hidden" animate="show" exit="exit" >
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="boxer leaning over the ropes of a boxing ring" />
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="women leaning against yellow car" />
                </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="couple hugging under trees by the ocean" />
                </Link>
            </Movie>
        </Work>
    );
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;