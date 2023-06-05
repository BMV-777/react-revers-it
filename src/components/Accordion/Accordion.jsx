import React from "react";

function Accordion({ title, value }) {
  return (
    <div>
      <AccordionTitle title={title} />
      <AccordionBody value={value} />
    </div>
  );
}

function AccordionTitle({ title }) {
  return (
    <>
      <h3>{title}</h3>
    </>
  );
}

function AccordionBody({ value }) {
  return (
    <div>
      <ul>
        <li>{value}</li>
        <li>{value}</li>
        <li>{value}</li>
      </ul>
    </div>
  );
}

export default Accordion;
