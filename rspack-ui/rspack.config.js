/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/index.tsx",
		worker: "./src/worker.ts",
	},
	output: {
		filename: "[name].js",
	},
	builtins: {
		html: [
			{
				template: "./index.html",
				favicon: "./src/assets/logo.svg",
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-typescript",
							"@babel/preset-react"
						],
						plugins: [
							"macros"
						]
					}
				}
			}
		]
	}
};;