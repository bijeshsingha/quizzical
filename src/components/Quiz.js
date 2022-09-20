import React from "react";
import Footer from "./Footer";
import Question from "./Question";

function Quiz(props) {
  const queObj = props.questions;

  function getOptID(id, queID) {
    props.handleClick((prevQueArray) => {
      const newQueArray = prevQueArray.map((prevQueObj) => {
        if (prevQueObj.id === queID) {
          const oldOpt = prevQueObj.options;
          const newOpt = oldOpt.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                isSelected: true,
              };
            } else {
              return {
                ...item,
                isSelected: false,
              };
            }
          });
          return {
            ...prevQueObj,
            options: newOpt,
          };
        } else {
          return prevQueObj;
        }
      });
      return newQueArray;
    });
  }

  const queElement = queObj.map((que) => {
    return (
      <Question
        key={que.id}
        value={que.question}
        options={que.options}
        getId={(id) => getOptID(id, que.id)}
        isClicked = {props.isClicked}
      />
    );
  });

  return (
    <div className="quiz-app">
      <div className="questions">{queElement}</div>
      <Footer questions={props.questions} isClicked = {props.isClicked} setIsClicked = {props.setIsClicked}/>
    </div>
  );
}

export default Quiz;
