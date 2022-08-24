import React, {useState, useCallback} from 'react';
import Button from "./components/UI/Button/Button";

import './App.css';
import Demo from "./components/Demo";

function App() {

    console.log("App runnning");

    const [showP, setShowP] = useState(false);

    const togglePHandler = useCallback (() => {
        setShowP(prevState => !prevState);
    }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
        <Button onClick={togglePHandler}>Toggle P</Button>
        <Demo show={showP}/>
    </div>
  );
}

export default App;
