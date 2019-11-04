import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Modal from 'react-bootstrap/Modal'


class App extends React.Component {

  state = {firstLoad: !sessionStorage.getItem('firstLoad')};

  handleDismissed() {
    this.setState({firstLoad: false});
    sessionStorage.setItem('firstLoad', 'false');
  }

  render() {
    return (
      <div className="App">
        <Main/>
        <div id='gradientOpacity'/>
        <Header/>
        <Modal
          size="lg"
          centered={true}
          show={this.state.firstLoad}
          onHide={() => this.handleDismissed()}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton id='modal'>
            <div className='modalHeader'>
              Welcome!
            </div>
          </Modal.Header>
          <Modal.Body id='modal'>
            <div className='modalText'>
              This app uses a  deep learning algorithm trained to judge toxicicity in online comments.
            </div>
            <div className='modalText'>
              It is far from perfect, but it can be just as interesting when it fails to evaluate what you've input.
            </div>
            <div className='modalText'>
              Give it a try! Just close this modal and send a comment in the message box below. The length of each label bar indicates how sure it is in the judgement. Make sure to check your spelling!
            </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
