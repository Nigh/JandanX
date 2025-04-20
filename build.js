// build.js
const esbuild = require("esbuild")

esbuild.build({
	entryPoints: ["src/jandanX.js"],
	bundle: true,
	outfile: "dist/jandanX.user.js",
	loader: { ".css": "text" },
	banner: {
		js: `
// ==UserScript==
// @name         JandanX
// @namespace    none
// @description  twitter like jandan!
// @version      0.0.2
// @author       xianii
// @namespace    none
// @exclude      https://jandan.net/member*
// @match        https://jandan.net/*
// @icon         https://jandan.net/wp-content/themes/jandan2025/images/logo2025-2.png
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==
`,
	},
})
