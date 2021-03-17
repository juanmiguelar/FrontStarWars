import React from "react";
import Card from "./Card";

const Lista = () => {
	return (
		<div className="container mb-5">
			<h3 className="text-left text-danger">Nombre</h3>
			<div className="scrolling-wrapper-flexbox">
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
				<Card title="titulo" description="description" />
			</div>
		</div>
	);
};

export default Lista;
