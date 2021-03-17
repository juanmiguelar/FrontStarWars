import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card mr-2 mr-2 mb-2">
			<img className="card-img-top" src="http://i.imgur.com/I86rTVl.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href="#" className="btn btn-primary">
					Learn more
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string
};

export default Card;
