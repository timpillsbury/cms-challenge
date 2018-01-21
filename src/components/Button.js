import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {

	constructor(props) {

		super(props);
		this.state = {
			showText: false
		};
		this.handleText = this.handleText.bind(this);

	}
	

	handleText() {
		this.setState((prevState) => {
        return {showText: !prevState.showText};
      });
	}



	render() {
		let myButton = null;
		if (this.state.showText){
			myButton = <button onClick={this.handleText}>{this.props.showText}</button>
		} else {
			myButton = <button onClick={this.handleText}>{this.props.label}</button>
		}
		return(
			<div className="button">
			{myButton}
			</div>
			);
	}

}

Button.propTypes = {
  label: PropTypes.string.isRequired
};

export default Button;