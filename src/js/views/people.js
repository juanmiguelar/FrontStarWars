import React, { useState, useEffect, useContext, Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);
	const [info, setInfo] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const params = useParams();
	const URL = store.API_URL + "/people/" + params.theid;

	useEffect(() => {
		getInfo();
	}, [params.theid]);

	const getInfo = () => {
		var requestOptions = {
			method: "GET"
		};

		fetch(URL, requestOptions)
			.then(response => {
				if (response.ok) {
					return response.json();
				}

				throw Error("The status code: " + response.status);
			})
			.then(result => {
				setInfo(result);
				setIsLoading(false);
			})
			.catch(error => {
				setIsLoading(false);
				console.log("error", error);
			});
	};

	const showInfo = () => {
		if (isLoading) {
			return <h2>Please wait!</h2>;
		} else {
			return (
				<Fragment>
					<h3>{info.name}</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet dui nec augue luctus
						consequat nec sed orci. In sed mattis lorem. Aliquam erat volutpat. Aliquam pharetra
						pellentesque nulla non gravida. Quisque volutpat ac elit eget tempus. Praesent euismod aliquam
						mi, a fringilla magna cursus a. Mauris interdum magna in erat sagittis iaculis eget eu sapien.
						Ut porttitor enim sed dolor vehicula tincidunt. Morbi a turpis accumsan, eleifend risus ac,
						ornare massa. Vivamus sagittis nulla et consequat molestie. Nulla gravida ipsum eu mi finibus
						ullamcorper.
					</p>
				</Fragment>
			);
		}
	};

	const showProperties = () => {
		if (!isLoading) {
			let colList = [];
			for (const key in info) {
				if (info.hasOwnProperty(key)) {
					const element = info[key];
					colList.push(setPropertie(key, element));
				}
			}
			return colList;
		}
		return null;
	};

	const setPropertie = (name, value) => {
		return (
			<div className="col">
				<p className="text-danger">{name}</p>
				<p className="text-danger">{value}</p>
			</div>
		);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="https://1000marcas.net/wp-content/uploads/2019/12/Star-Wars-Logo-600x338.png" />
				</div>
				<div className="col">{showInfo()}</div>
			</div>
			<hr />
			<div className="row">{showProperties()}</div>
		</div>
	);
};

People.propTypes = {
	match: PropTypes.object
};
