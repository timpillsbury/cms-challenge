import React from "react";
import propTypes from "prop-types";
import Stringifier from "../components/Stringifier";

import FullWidthImage from "../components/FullWidthImage";
import Headline from "../components/Headline";
import List from "../components/List";
import Button from "../components/Button";

const CMSComponent = ({ type, ...props }) => {
   // properties are being spread via spread operator ...
  switch(type) {
  	case "FullWidthImage":
  		return ( <FullWidthImage {...props} /> );
  	case "Headline":
  		return ( <Headline {...props} />);
  	case "List":
        return (<List {...props} />);
    case "Button":
        return (<Button {...props} />);
    default:
        return (<Stringifier type={type} {...props} />);
  }



 
};

CMSComponent.propTypes = {
  type: propTypes.string.isRequired
};

export default CMSComponent;
