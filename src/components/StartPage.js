import React from "react"
import Options from "./Options"

function StartPage(props) {
    

    return (
        <div className="start-page">
            <h1 className="heading">Quizzical</h1>
            <p className="desc">Have fun Answering!</p>
            <button
                className="start-btn btn"
                onClick={props.startQuiz}
            >
                Start Quiz
            </button>
        </div>
    );
}

export default StartPage;