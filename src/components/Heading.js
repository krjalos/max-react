import {useState} from "react";
import Output from "./Output";

const Heading = () => {

  const [changed, setChanged] = useState(false);

  const clickHandler = () => {
    setChanged(true);
  }

  return (
    <header>
      <h1>Welcome to React testing!</h1>
      <Output>{changed ? "Text was changed" : "Lorem ipsum dolor sit amet."}</Output>
      <button onClick={clickHandler}>Change Text</button>
    </header>
  );
}

export default Heading;