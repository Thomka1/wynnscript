const webpack = require("webpack");
const { resolve } = require("path");

const base = {
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	externals: {
		vscode: "commonjs vscode"
	}
}

const main = {
	...base,
	entry: "./src/extension.ts",
	target: "node",
	output: {
		path: resolve(__dirname, "out"),
		filename: "bundle.js",
		libraryTarget: "commonjs2"
	},
	
}

const web = {
	...base,
	entry: "./src/extension-web.ts",
	target: "webworker",
	output: {
		path: resolve(__dirname, "out"),
		filename: "bundle.web.js",
		libraryTarget: "commonjs"
	},
	resolve: {
		extensions: ['.ts', '.js'],
		fallback: {
			fs: false,
			os: false,
			path: false,
			util: false,
			assert: require.resolve("assert"),
		}
	},
	plugins: [
		new webpack.ProvidePlugin({
	 		process: 'process/browser',
		}),
	],
}

// Add web later
module.exports = [ 
	main,
	web
];