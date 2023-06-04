import React from "react";

function Star(props) {
  //  console.log("Star");

  if (props.selected) {
    return (
      <span>
        <b>Star </b>
      </span>
    );
  } else {
    return <span>Star </span>;
  }
}

export default Star;
