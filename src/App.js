import React, {Component} from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

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

      {this.state.showModal ?
          <React.Fragment>
            <Modal show={this.state.showModal} closed={this.closeModalHandler}/>
            <Backdrop />
          </React.Fragment>
        : null }
      <button onClick={this.showModalHandler} className="Button">Open Modal</button>
      <h3>Animating Lists</h3>
      <List/>
    </div>);
  }
}

export default App;
