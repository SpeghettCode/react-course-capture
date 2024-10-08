import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;
    `;

export const Desc = styled.div`
    flex: 1;
    padding-left: 5rem;
    z-index: 2;

    h2 {
        font-weight: lighter;
    }
`;

export const Img = styled.div`
    flex: 1;
    overflow: hidden;
    z-index: 2;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;