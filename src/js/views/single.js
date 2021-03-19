import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<img src="http://i.imgur.com/I86rTVl.jpg" />
				</div>
				<div className="col">
					<h3>Este es un titulo</h3>
					<p>
						fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf
						asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja
						sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf
						af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj
						abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb
						jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf
						fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf
						asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja
						sdkfjbakljsbdf af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf
						af kjansdkfj abkljf askdjfb jahsd fadf fjansdikf asdfjkahsd kfja sdkfjbakljsbdf af kjansdkfj
						abkljf askdjfb jahsd fadf
					</p>
				</div>
			</div>
			<hr />
			<div className="row"></div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
