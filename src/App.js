import React, { Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  render() {
    return (
      <Fragment>
        <CSSTransition
              in={this.state.show}
              timeout={300}
              classNames="message"
              unmountOnExit
              onExited={() => {
                this.setState({
                  showValidationButton: true,
                });
              }}
            >
          <div>hell0</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>toggle</button>
      </Fragment>
    )
  }

  handleToggle() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }
}

export default App
