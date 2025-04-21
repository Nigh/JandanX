// build.js
const esbuild = require("esbuild")
const fs = require("fs").promises

const userscriptBanner = `
// ==UserScript==
// @name        JandanX
// @namespace   none
// @description twitter like jandan!
// @version     0.0.5
// @author      xianii
// @namespace   none
// @exclude     none
// @match       https://jandan.net/*
// @icon        https://raw.githubusercontent.com/Nigh/JandanX/refs/heads/main/jd-logo.png
// @grant       GM_addStyle
// @run-at      document-start
// @updateURL   https://github.com/Nigh/JandanX/releases/latest/download/jandanX.meta.js
// @downloadURL https://github.com/Nigh/JandanX/releases/latest/download/jandanX.user.js
// ==/UserScript==
`

async function buildUserscript() {
	try {
		await esbuild.build({
			entryPoints: ["src/jandanX.js"],
			bundle: true,
			outfile: "dist/jandanX.user.js",
			loader: { ".css": "text" },
			banner: {
				js: userscriptBanner,
			},
		})
		console.log("Built dist/jandanX.user.js")
	} catch (error) {
		console.error("Error building userscript:", error)
	}
}

async function buildMeta() {
	try {
		// Extract the metadata block
		const metaContent = userscriptBanner.trim()
		await fs.writeFile("dist/jandanX.meta.js", metaContent + "\n")
		console.log("Built dist/jandanX.meta.js")
	} catch (error) {
		console.error("Error building meta.js:", error)
	}
}

async function main() {
	await Promise.all([buildUserscript(), buildMeta()])
}
main()
