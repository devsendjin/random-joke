import React from "react";
import "./gif.css";
import icon from "./Chucknorris.gif";

const Gif = () => {
  return <div className="gif-wrapper">
		<img src={icon} alt="Chucknorris" className="gif" />
		<img src={icon} alt="Chucknorris" className="gif" />
		<img src={icon} alt="Chucknorris" className="gif" />
		<img src={icon} alt="Chucknorris" className="gif" />
		<img src={icon} alt="Chucknorris" className="gif" />
	</div>;
};

export default Gif;
