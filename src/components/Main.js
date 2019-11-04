import React from 'react';
import Response from "./Response";
import './Main.css'
import {Transition, animated} from 'react-spring/renderprops'
import image from "./ml-transparent.png";
import Toast from 'react-bootstrap/Toast'

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      responses: [],
      currentString: '',
      error: ''
    }
  }

  handleSubmit() {
    if (this.state.currentString.trim().length < 1) {
      return this.setState({error: 'Please write something!'})
    } else {
      this.sendRequest()
      this.setState({currentString: ''})
    }
  }

  handleInput(e) {
    if (e.target.value.length > 250) {
      return this.setState({error: 'Slow down there keyboard warrior, please keep it under 250 characters!'})
    }
    this.setState({currentString: e.target.value})
  }

  clearHistory() {
    this.setState({submissions: [], responses: []})
  }

  sendRequest() {
    this.setState({loading: true, responses: [...this.state.responses, this.state.currentString],});
    fetch("http://ml.workbor.de/",
      {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({text: this.state.currentString})
      }
    )
      .then(res => res.json())
      .then(
        (result) => {
          setTimeout(() => {this.setState({
            loading: false,
            responses: [...this.state.responses, result]
          })
            this.inputRef.focus()
          }, 200)
        },
        (error) => {
          this.inputRef.focus()
          this.setState({
            loading: false,
            error: error
          });
        }
      )
  }

  render() {
    const {responses, loading} = this.state;
    return (
      <div className='mainApp'>
        <div className='responseList' style={{backgroundImage: `url(${image})`}}>
          <Transition
            items={responses}
            keys={(response, index) => response + index}
            from={{ transform: "translate3d(0,40px,0)", opacity: 0 }}
            enter={{ transform: "translate3d(0,0px,0)", opacity: 1 }}
            leave={{ transform: "translate3d(0,40px,0)", opacity: 0 }} >
            {response => props => (
              <animated.div
                style={props}
                className="response"
              >
                { typeof response === 'string' ?
                  <Response comment={response}/> :
                  response.tags.length > 0 ?
                  <Response scores={response.scores} tags={response.tags}/> :
                  <Response scores={response.scores} tags={['This comment seems fine...']}/>}
              </animated.div>
            )}
          </Transition>
        </div>
        <input autoComplete='false'
               disabled={loading}
               ref={(ref => this.inputRef = ref)}
               onKeyPress={(e) => ((e.key === 'Enter') ? this.handleSubmit() : {})}
               value={this.state.currentString}
               onChange={(e) => this.handleInput(e)}/>
        {loading ? <div className='loader'/> : <div className='send' onClick={() => this.handleSubmit()}>{'>'}</div>}
        <Toast id='toast'
               onClose={() => this.setState({error: ''})}
               show={this.state.error}
               delay={2000}
               autohide>
          <Toast.Body>{this.state.error}</Toast.Body>
        </Toast>
      </div>
    )
  }
}

export default Main