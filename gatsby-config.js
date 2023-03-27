module.exports = {
	siteMetadata: {
		title: "Stone-Tiles",
		description: "Stone-Tiles Industry",
	},
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-emotion",
		"gatsby-plugin-react-helmet",

		{
			resolve: "gatsby-plugin-mdx",
			options: {
				defaultLayouts: {
					default: require.resolve("./src/components/layout.js"),
				},
				gatsbyRemarkPlugins: [{ resolve: "gatsby-remark-images" }],
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "posts",
				path: "posts",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "images",
			},
		},
		{
			resolve: "gatsby-source-instagram",
			options: {
				username: "daguydan",
			},
		},
	],
};
