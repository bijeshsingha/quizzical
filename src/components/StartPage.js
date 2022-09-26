import React from "react"

function StartPage(props) {

    function handleChange(event) {
        const {value} = event.target
        props.setCategory(value)
    }

    const selectElement = 
      <select onChange={handleChange} name="trivia_category" className="category desc" value={props.category}>
        <option value="any">Any Category</option>
        <option value="9">General Knowledge</option>
        <option value="10">Entertainment: Books</option>
        <option value="11">Entertainment: Film</option>
        <option value="12">Entertainment: Music</option>
        <option value="13">Entertainment: Musicals: Theatres</option>
        <option value="14">Entertainment: Television</option>
        <option value="15">Entertainment: Video Games</option>
        <option value="16">Entertainment: Board Games</option>
        <option value="17">Science: Nature</option>
        <option value="18">Science: Computers</option>
        <option value="19">Science: Mathematics</option>
        <option value="20">Mythology</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
        <option value="23">History</option>
        <option value="24">Politics</option>
        <option value="25">Art</option>
        <option value="26">Celebrities</option>
        <option value="27">Animals</option>
        <option value="28">Vehicles</option>
        <option value="29">Entertainment: Comics</option>
        <option value="30">Science: Gadgets</option>
        <option value="31">Entertainment: Japanese Anime: Manga</option>
        <option value="32">Entertainment: Cartoon: Animations</option>
      </select>

    

    return (
        <div className="start-page">
            <h1 className="heading">Quizzical</h1>
            <p className="desc">Have fun Answering!</p>
            {selectElement}
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