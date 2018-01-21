import React from "react";
import PropTypes from "prop-types";
import List from "./List"

const Stringifier = ({ type, ...props }) => {

  // console.log(type);
  
  return (
    <div className="stringifier">
      <p>
        I'm a component of type <strong>{type}!</strong>
      </p>
      
      <p>This is my stringified content:</p>
      <p>{JSON.stringify(props)}</p>
    </div>
  );
};

Stringifier.propTypes = {
  type: PropTypes.string.isRequired
};

export default Stringifier;
