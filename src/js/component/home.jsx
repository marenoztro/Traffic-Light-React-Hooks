import React from "react";
import { useState } from "react";

const Home = () => {
	
	const [shadow, setShadow] = useState("");
	console.log(shadow);

	return (
		<div>
			<div className="trafficTop container d-flex justify-content-center"></div>
			<div className="caja container d-flex justify-content-center">
				<div className="row row-cols-1 mt-1 mb-1">
					<div
						className="d-flex justify-content-center redlight col"
						onClick={() => setShadow("red")}>
						<button
							className={
								"button btn btn-danger disabled" +
								" " +
								(shadow === "red" ? "buttonshadow" : "")
							}></button>
					</div>
					<div
						className="d-flex justify-content-center yellowlight col"
						onClick={() => setShadow("yellow")}>
						<button
							className={
								"button btn btn-warning disabled" +
								" " +
								(shadow === "yellow" ? "buttonshadow" : "")
							}></button>
					</div>
					<div
						className="d-flex justify-content-center greenlight col"
						onClick={() => setShadow("green")}>
						<button
							className={
								"button btn btn-success disabled" +
								" " +
								(shadow === "green" ? "buttonshadow" : "")
							}></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;