import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const NavLink = styled(Link)`
	color: black;
	font-size: 1rem;
	/*to use this props.frontWeight, set it to where needed*/
	font-weight: ${(props) => props.fontWeight || "normal"};
	line-height: 1;
	margin: 0 0.5rem 0 0;
	padding: 0.25rem;
	text-decoration: none;

	&.current-page {
		border-bottom: 2px solid black;
	}

	&:last-of-type {
		margin-right: 0;
	}
`;

const Header = () => (
	<header
		css={css`
			background: grey;
			border-bottom: 4px solid yellow;
			display: flex;
			justify-content: space-between;
			padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
		`}
	>
		<NavLink to="/" fontWeight="bold">
			{" "}
			Stone-Tiles
		</NavLink>
		<nav
			css={css`
				margin-top: 0px;
			`}
		>
			<NavLink to="/" activeClassName="current-page">
				Home
			</NavLink>
			<NavLink to="/about" activeClassName="current-page">
				About
			</NavLink>
		</nav>
	</header>
);

export default Header;
