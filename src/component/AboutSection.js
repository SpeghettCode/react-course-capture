import react from "react";
import home1 from '../img/home1.png';
// styled
import styled from 'styled-components';

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
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: #fff;
    `;

const Desc = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`;

const Img = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;