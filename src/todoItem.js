import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const { content } = this.props
    return <div onClick={this.handleClick}>{content}</div>
  }

  handleClick() {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }

  componentWillUnmount() {
    console.log("CHILD  componentWillUnmount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
     if(nextProps.content  !== this.props.content) {
       return true
     }
     return false
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}

TodoItem.defaultProps = {
  content: '12588'
}
export default TodoItem
