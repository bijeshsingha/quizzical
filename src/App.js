import "./App.css";
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";
import React from "react";
import { nanoid } from "nanoid";
function App() {
  const [isStarted, setIsStarted] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);
  const [isClicked, setIsClicked] = React.useState(false);
  const [category, setCategory] = React.useState(0)
  const [loading, setLoading] = React.useState(false);

  function startQuiz() {
    setIsStarted(true);
  }

  let url = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;
  
  React.useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQArray(data.results));

    function setQArray(data) {
      const queObj = data.map((que) => {
        const ica = que.incorrect_answers;
        const ca = que.correct_answer;
        const optionsArray = [ca, ...ica];

        let optObj = optionsArray.map((option, index) => {
          return {
            id: index,
            value: option,
            isSelected: false,
          };
        });
        function suffleArray() {
          let newOption = [];
          const arrayIndex = [0, 1, 2, 3];
          arrayIndex.sort((a, b) => 0.5 - Math.random());
          for (let i = 0; i < 4; i++) {
            newOption[i] = optObj[arrayIndex[i]];
          }
          return newOption;
        }

        optObj = suffleArray();

        let queObj = {
          id: nanoid(),
          question: que.question,
          options: optObj,
        };

        return queObj;
      });
      setLoading(false)
      setQuestions(queObj);
    }
  }, [url]);

  const loadingAni = (<div className="loader-container">
        <div className="spinner"></div>
      </div>)
  const mainContent = isStarted ? (
        <Quiz
          questions={questions}
          handleClick={setQuestions}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      ) : (
        <StartPage startQuiz={startQuiz} setCategory={setCategory} category={category}/>
      )

  return (
    <div className="container">
      {loading? loadingAni :
      mainContent}
    </div>
  );
}

export default App;
