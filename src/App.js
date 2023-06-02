// import "./App.css";

function App() {
  console.log("App");
  return (
    <div className="App">
      This is App component
      <Rating />
      <Accordion />
    </div>
  );
}

function Rating() {
  console.log("Rating");
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

function Star() {
  console.log("Star");
  return <div>Star</div>;
}

function Accordion() {
  console.log("Accordion");
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle() {
  console.log("AccordionTitle");
  return (
    <>
      <h3>menu</h3>
    </>
  );
}

function AccordionBody() {
  console.log("AccordionBody");
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

export default App;
