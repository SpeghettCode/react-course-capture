import react from "react";
import home1 from '../img/home1.png';
// styled
import styled from 'styled-components';
import { About, Desc, Img, Hide } from "../styles";

const AboutSection = () => {
    return (
        <About>
            <Desc>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span></h2>
                    </Hide>
                    <Hide>
                        <h2>come true.</h2>
                    </Hide>
                </div>

                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </Desc>
            <Img>
                <img src={home1} alt="guy with a camera" />
            </Img>
        </About>
    );
}

//styled component

export default AboutSection;