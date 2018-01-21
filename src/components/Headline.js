import React, {Component} from 'react';

import PropTypes from "prop-types";




const Headline = ({text}) => {

	return(
		<div className ="headline" >
			<h1>{text}</h1>
		</div>
		);

};


Headline.propTypes = {
	text: PropTypes.string.isRequired
}

export default Headline;