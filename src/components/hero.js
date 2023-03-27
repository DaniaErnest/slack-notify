import React from "react";
import styled from "@emotion/styled";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
	background-image: url("/images/stonetile.JPG");
	background-position: top 20% center;
	background-size: cover;
	height: 50vh;

	+ * {
		margin-top: 0;
	}
`;

const TextBox = styled("div")`
	background-image: linear-gradient(to top, #ddbbffdd 2rem);
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-end;
	padding: 0 calc((100vw - 550px) / 2) 2rem;
	width: 100%;

	h1 {
		text-shadow: 1px 1px 3px #eeddff66;
		font-size: 3.15rem;
	}

	p,
	a {
		color: yellow;
		margin-top: 0;
	}

	a {
		margin-top: 0.5rem;
	}
`;

const Hero = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "stonetile.JPG" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
			<TextBox>
				<h1> Stone-Tiles Industry</h1>
				<p>
					<Link to="/about/">Learn more &rarr;</Link>
				</p>
			</TextBox>
		</ImageBackground>
	);
};

export default Hero;
