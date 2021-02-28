/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Form from "./components/Form";
import Item_list from "./components/Item_list";
import Template from "./components/Template";
class App extends Component {
    id = 1;
    state = {
        input: "",
        todo: [{ id: 0, text: " todo1", checked: false }],
    };

    handleButton = () => {
        const { input, todo } = this.state;
        console.log(input);
        this.setState({
            input: "",
            todo: todo.concat({
                id: this.id++,
                text: input,
                checked: false,
            }),
        });
    };
    handleTextChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };
    handleEnterPress = (e) => {
        if (e.key === "Enter") {
            this.handleButton();
        }
    };
    handleRemove = (id) => {
      const { todo } = this.state;
      this.setState({
        todo: todo.filter(todo => todo.id !== id)
      });
    };
    handleTodoClick = (id) => {
      const { todo } = this.state;

      // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾는다. 
      const index = todo.findIndex(todo => todo.id === id);
      const selected = todo[index]; // 선택한 객체
  
      const nextTodos = [...todo]; // 배열을 복사
  
      // 기존의 값들을 복사하고, checked 값을 덮어쓰기
      nextTodos[index] = { 
        ...selected, 
        checked: !selected.checked
      };
  
      this.setState({
        todo: nextTodos
      });
    };
    render() {
        const { input, todo } = this.state;
        const {
            handleButton,
            handleTextChange,
            handleEnterPress,
            handleRemove,
            handleTodoClick,
        } = this;
        return (
            <Template
                form={(
                  <Form
                      value={input}
                      onClickButton={handleButton}
                      onTextChange={handleTextChange}
                      onEnter={handleEnterPress}
                  />)
                }
            >
                <Item_list
                    todo={todo}
                    onRemove={handleRemove}
                    onTodoClick={handleTodoClick}
                />
            </Template>
        );
    }
}

export default App;
