import React, {Component} from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import {Transition} from "react-transition-group";

class App extends Component {

  state = {
    showModal: false
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

      <Transition in={this.state.showModal} timeout={300} mountOnEnter unmountOnExit>
        {state => (
          <React.Fragment>
            <Modal currentState={state} show={this.state.showModal} closed={this.closeModalHandler}/>
            <Backdrop currentState={state} show={this.state.showModal}/>
          </React.Fragment>
        )}
      </Transition>
      <button onClick={this.showModalHandler} className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List/>
    </div>);
  }
}

export default App;
