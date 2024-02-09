import React from "react";
import { pageIsNotFound } from "../../utilities/Constants/constantValues";

type Props = {};

const NotFound = (props: Props) => {
	return <div>{pageIsNotFound}</div>;
};

export default NotFound;
