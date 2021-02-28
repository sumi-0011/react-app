import React, { Component } from 'react';
import Item from './item';
class Item_list extends Component {
  render() {
    const {todo, onRemove, onTodoClick} = this.props;

    const todoList = todo.map(
        ({id,text,checked}) => (
          <Item
          id={id}
          text={text}
          checked={checked}
          onToggle={onTodoClick}
          onRemove={onRemove}
          key={id}
          />

        )
      );

    return (
      <div >
        {todoList}
      </div>
    );
  }
}

export default Item_list;