import React from "react";

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

export default Accordion;
