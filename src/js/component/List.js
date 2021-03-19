import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

import { Context } from "../store/appContext";

const List = props => {
	const { store, actions } = useContext(Context);
	const [list, setList] = useState([]);

	useEffect(() => {
		getListItems();
	}, []);

	const getListItems = () => {
		const url = store.API_URL + props.route;

		var requestOptions = {
			method: "GET"
		};

		fetch(url, requestOptions)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				throw Error("API status code: " + response.status);
			})
			.then(result => setList(result.results))
			.catch(error => console.log("error", error));
	};

	return (
		<div className="container mb-5">
			<h3 className="text-left text-danger">{props.title}</h3>
			<div className="scrolling-wrapper-flexbox">
				{list.map((item, index) => {
					return <Card title={item.name} route={props.route} id={item.uid} key={index} />;
				})}
			</div>
		</div>
	);
};

List.propTypes = {
	title: PropTypes.string,
	route: PropTypes.string
};

export default List;
