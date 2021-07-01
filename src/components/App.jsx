import React from "react";
import { plus } from "./math.js";
import "../styles/styles.scss";
import { Container } from "../styles/styles.js";

const data = plus(2, 12451);

function App() {
  return (
    <Container>
      Data now is: {data} :)))
      <img src="http://lorempixel.com/400/200/" alt="" />
    </Container>
  );
}

export default App;
