import React from "react";
import "./item.css";

const item = ({ id, text, checked, onToggle, onRemove }) => {
    return (
        <div className="todoItem" onClick={(e) => {
          onToggle(id);         
        }}>
           
            <span className= {`todo ${checked ? 'checked' : 'notChecked'}`}>
                <span >{text}</span>
            </span>
            <span
                className="remove"
                onClick={(e) => {
                    e.stopPropagation();  //이벤트 버블링 확산 막기
                    onRemove(id);
                }}>
                <button className="removeBt">X</button>
            </span>
            {/* {
              checked && (<div className="checked-mark"></div>)
          } */}
        </div>
    );
};

export default item;
