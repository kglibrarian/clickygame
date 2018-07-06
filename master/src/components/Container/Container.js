import React from "react";

const Container = props =>
  <div className="container-fluid d-flex flex-wrap">
    {props.children}
  </div>;

export default Container;