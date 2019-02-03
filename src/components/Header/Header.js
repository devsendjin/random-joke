import React from 'react';
import './header.css';
import icon from './Chucknorris.png';

const Header = () => {
	return (
		<header>
			<img className="logo" src={icon} alt="Chucknorris" />
		</header>
	);
};

export default Header;
