import React from "react";
import { Global, css } from "@emotion/react";
import Helmet from "react-helmet";
import Header from "./header";
import useSiteMetadata from "../hooks/use-sitemetadata";

const Layout = ({ children }) => {
	//destructure
	const { title, description } = useSiteMetadata();
	return (
		<>
			<Global
				//Global:-setting up styles that will show in global scope
				// on the page
				// * all the files get the styles
				//*+* every sibling selector get d style
				//+* anything thatcomes after the selector(headings(h))
				// > direct selector e.g >div

				styles={css`
					* {
						box-sizing: border-box;
						margin: 0;
					}
					* + * {
						margin-top: 1rem;
					}

					html,
					body {
						margin: 0;
						color: white;
						font-family: -apple-system, BlinkMacSystemFont,
							"SegoeUI", Roboto, Helvetica, Arial, sans-serif;
						font-size: 18px;
						line-height: 1.4;
						/* remove margin for the main div that Gatsby mounts 
						into, by default gatsby is wrap in a div*/
						> div {
							margin-top: 0;
						}

						h1,
						h2,
						h3,
						h4,
						h5,
						h6 {
							color: yellow;
							line-height: 1.1;
							+ * {
								margin-top: 0.5rem;
								color: white;
							}
						}

						strong {
							color: #222;
						}

						li {
							margin-top: 0.25rem;
						}
					}
				`}
			/>
			<Helmet>
				<html lang="en" />
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
			<Header />
			<main
				css={css`
					margin: 2rem auto 4rem;
					max-width: 90vw;
					width: 550px;
					background-color: grey;
				`}
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
