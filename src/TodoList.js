import React, { Component, Fragment } from 'react'
import './style.css'
import TodoItem from './todoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '123',
      list: ['222', '3333']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log("render");
    return (
      <Fragment>
        <div>
          <label htmlFor="innerInput">请输入内容</label>
          <input
            id="innerInput"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            ref={input => {
              this.input = input
            }}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>{this.getTodoItem()}</ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          index={index}
          content={item}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleInputChange(e) {
    // this.setState({
    //   inputValue: e.target.value
    // })
    // this.setState(() => {
    //     return {
    //         inputValue: e.target.value
    //     }
    // })

    console.log(this.input)

    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick(e) {
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })

    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList
