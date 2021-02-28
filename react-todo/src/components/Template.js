import React from 'react';
import './Template.css';

const Template = ({form,children}) => {
  return (
    <div id="body">
        <div className="todo_title">
            To do List
        </div>
        <div className="todo_form">
            {form}
        </div>
        <div className="todo_list">
            {children}
        </div>
    </div>
  );
};

export default Template;