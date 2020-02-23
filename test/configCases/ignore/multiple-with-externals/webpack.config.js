"use strict";

const { IgnorePlugin } = require("../../../../");

module.exports = {
	entry: "./test.js",
	externals: {
		"./normal-module": "{}"
	},
	plugins: [
		new IgnorePlugin({
			resourceRegExp: /ignored-module1/
		}),
		new IgnorePlugin({
			resourceRegExp: /ignored-module2/
		})
	]
};
