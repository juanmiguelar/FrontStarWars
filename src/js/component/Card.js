import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = props => {
	const route = "/" + props.route + "/" + props.id;
	return (
		<div className="card mr-5 ml-3 mb-2">
			<img className="card-img-top" src="http://i.imgur.com/I86rTVl.jpg" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title text-dark text-left">{props.title}</h5>
				<p className="card-text text-secondary text-left">{props.description}</p>
				<Link to={route}>
					<button className="btn btn-outline-primary float-left">Learn more</button>
				</Link>
				<a href="#" className="btn btn-outline-warning float-right">
					&#x2661;
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	route: PropTypes.string,
	id: PropTypes.string
};

export default Card;
