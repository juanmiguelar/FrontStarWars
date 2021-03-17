import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card mr-5 ml-3 mb-2">
			<img className="card-img-top" src="http://i.imgur.com/I86rTVl.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-dark text-left">{props.title}</h5>
				<p className="card-text text-secondary text-left">{props.description}</p>
				<a href="#" className="btn btn-outline-primary float-left">
					Learn more
				</a>
				<a href="#" className="btn btn-outline-warning float-right">
					&#x2661;
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
