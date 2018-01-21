import React, {Component} from 'react';
import propTypes from "prop-types";




const FullWidthImage = ({src, alt}) => {
	
	return (
		<div className="full_width_image">
			<img src = {src} alt={alt} />
		</div>
	);
	
};

FullWidthImage.propTypes = {
	src : propTypes.string.isRequired
};


export default FullWidthImage;