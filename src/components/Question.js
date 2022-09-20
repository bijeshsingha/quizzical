import React from "react";
import Options from "./Options.js";

function Question(props) {

  const options = props.options

  /*
  const ica = props.incorrectAnswers;
  const ca = props.correctAnswer;

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

  const [options, setOptions] = React.useState(optObj);

  */

  function func(id) {
    //console.log(id)
    props.getId(id)
    /*
    setOptions(prevOpt => prevOpt.map(opt=>{
      if(opt.id===id){
        return {
          ...opt,
          isSelected: true
        }
      }
      else{
        return {
          ...opt,
          isSelected: false
        }
      }
    }))
    */
  }

  return (
    <div className="question questionText">
      <p dangerouslySetInnerHTML={{ __html: props.value }}></p>
      <div className="options">
        <Options options={options} handleClick={(id)=>func(id)} isClicked={props.isClicked}/>
      </div>
    </div>
  );
}

export default Question;
