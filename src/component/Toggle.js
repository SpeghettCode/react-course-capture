import react, {useState} from "react";
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);

    return (
        <QuestionDiv layout onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ''}
            <div className="faq-line"></div>
        </QuestionDiv>
    );
}

const QuestionDiv = styled(motion.div)`
    cursor: pointer;
    margin-bottom: 7.5rem;
`;

export default Toggle;