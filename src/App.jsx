import React from "react";
import "./App.css";

import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import PageTitle from "./components/PageTitle/PageTate";

function App() {
  console.log("App");
  return (
    <div className="App">
      <PageTitle title={"This is App component"} />
      <PageTitle title={"My friends"} />

      <Rating value={3} />
      <Accordion title={"Menu"} value={"1"} />
      <Accordion title={"User"} value={"1"} />

      <Rating value={0} />
      <Rating value={1} />
      <Rating value={1} />
      <Rating value={3} />
      <Rating value={4} />
    </div>
  );
}

export default App;
