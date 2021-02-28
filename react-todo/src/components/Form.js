import React from "react";
import "./Form.css";
const Form = ({ value, onClickButton, onTextChange, onEnter }) => {
    return (
        <span className="form_div">
            <input
                type="text"
                value={value}
                onChange={onTextChange}
                onKeyPress={onEnter}
                className="todoInputText"
            />
            <button onClick={onClickButton} className="addBt">+</button>
        </span>
    );
};

export default Form;
