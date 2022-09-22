import React, {Component} from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import {Transition} from "react-transition-group";

class App extends Component {

  state = {
    showModal: false, showSquare: false
  }

  closeModalHandler = () => {
    this.setState({showModal: false});
  }

  showModalHandler = () => {
    this.setState({showModal: true});
  }

  render() {
    console.log(this.state);
    return (<div className="App">
      <h1>React Animations</h1>
      <button className='Button'
              onClick={() => this.setState(prevState => ({showSquare: !prevState.showSquare}))}>Toggle square
      </button>
      <br/>

      <Transition in={this.state.showSquare} timeout={300} mountOnEnter unmountOnExit>
        {state => (<div style={{
          background: 'red',
          margin: '20px auto',
          width: 100,
          height: 100,
          transition: 'all 1s ease-out',
          opacity: state === 'exiting' ? 0 : 1
        }}></div>)}
      </Transition>

      {this.state.showModal ? <React.Fragment>
        <Modal show={this.state.showModal} closed={this.closeModalHandler}/>
        <Backdrop show={this.state.showModal}/>
      </React.Fragment> : null}
      <button onClick={this.showModalHandler} className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List/>
    </div>);
  }
}

export default App;
