import React from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "../../pages/NotFound/NotFound";
import Platform from "../../pages/Platform/Platform";

type Props = {};

const RouteDefinitions = (props: Props) => {
	return (
		<Routes>
			<Route path="/" element={<Platform />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default RouteDefinitions;
