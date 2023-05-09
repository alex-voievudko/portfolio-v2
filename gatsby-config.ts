import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
	siteMetadata: {
		title: `My Portfolio`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/icon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'assets',
				path: './src/assets/',
			},
			__key: 'assets',
		},
		{
			resolve: `gatsby-transformer-yaml`,
			options: {
				typeName: `Pages`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
	],
}

export default config
