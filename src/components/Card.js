import React, { Fragment } from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <Fragment>
      <div className="container">{props.children}</div>
    </Fragment>
  );
};

export default Card;
