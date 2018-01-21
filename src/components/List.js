import React, {Component} from 'react';
import PropTypes from "prop-types";



const List = ({ items }) => {
  return (
    <div className="list">
      <ul>
        {items.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
};

// propTypes for typechecking items : array

List.propTypes = {
  items: PropTypes.array.isRequired
};

export default List;