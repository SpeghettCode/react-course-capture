import react from "react";

const FaqSection = () => {
    return (
        <div className="faq">
            <h2>Any questions? <span>FAQ</span></h2>
            <div className="question">
                <h4>How do i start?</h4>
                <div className="answer-div">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                </div>
                <div className="question">
                <h4>Daily schedule</h4>
                <div className="answer-div">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                </div>
            </div>
            <div className="question">
                <h4>Different payment methods</h4>
                <div className="answer-div">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                </div>
            </div>
            <div className="question">
                <h4>What products do you offer?</h4>
                <div className="answer-div">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, similique?</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default FaqSection;