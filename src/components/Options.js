import React from "react";

function Options(props) {
  const options = props.options;

  return options.map((option) => {
    let className = "";
    if (option.id === 0) {
      className = "option correct";
    } else if (option.isSelected) {
      className = "option incorrect";
    } else {
      className = "option";
    }
    return (
      <p
        key={option.id}
        className={
          props.isClicked
            ? className
            : option.isSelected
            ? "option selected"
            : "option"
        }
        dangerouslySetInnerHTML={{ __html: option.value }}
        onClick={() => props.handleClick(option.id)}
      ></p>
    );
  });
}

export default Options;
