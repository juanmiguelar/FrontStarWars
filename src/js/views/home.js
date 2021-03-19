import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Card from "../component/Card";
import List from "../component/List";

export const Home = () => (
	<div className="text-center mt-5">
		<List title="Characters" route="people"></List>
		<List title="Planets" route="planets"></List>
	</div>
);
