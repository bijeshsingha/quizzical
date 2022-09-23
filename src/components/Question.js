import React from "react";
import Options from "./Options.js";

function Question(props) {

  const options = props.options

  return (
    <div className="question questionText">
      <p dangerouslySetInnerHTML={{ __html: props.value }}></p>
      <div className="options">
        <Options options={options} handleClick={(id)=>props.getId(id)} isClicked={props.isClicked}/>
      </div>
    </div>
  );
}

export default Question;
