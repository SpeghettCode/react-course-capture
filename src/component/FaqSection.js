import react from "react";
// styles
import styled from 'styled-components';
import {About} from '../styles';

// animation
import Toggle from "./Toggle";
import {AnimateSharedLayout} from 'framer-motion';
import { useScroll } from "./useScroll";
import { fade } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();

    return (
        <Faq ref={element} variants={fade} animate={controls} initial='hidden'>
            <SectionHeader>Any questions? <span>FAQ</span></SectionHeader>

            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="question">
                        <div className="answer-div">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                        </div>
                    </div>
                </Toggle>

                <Toggle title='Daily schedule'>
                    <div className="question">
                        <div className="answer-div">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                        </div>
                    </div>
                </Toggle>

                <Toggle title='Different payment methods'>
                    <div className="question">
                        <div className="answer-div">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                        </div>
                    </div>
                </Toggle>

                <Toggle title='What products do you offer?'>
                    <div className="question">
                        <div className="answer-div">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                        </div>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

// styled components
const Faq = styled(About)`
    display: block;

    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer-div {
        padding: 2rem 0rem;

        p {
            padding: 1rem 0rem;
        }
    }
`;

const SectionHeader = styled.h2`
    margin-bottom: 5rem;
`;

export default FaqSection;