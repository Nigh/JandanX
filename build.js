// build.js
const esbuild = require("esbuild")
const fs = require("fs").promises

function createUserscriptBanner(version) {
	return `
// ==UserScript==
// @name        JandanX
// @namespace   none
// @description twitter like jandan!
// @version     ${version}
// @author      xianii
// @namespace   none
// @exclude     none
// @match       https://jandan.net/*
// @icon        https://raw.githubusercontent.com/Nigh/JandanX/refs/heads/main/jd-logo.png
// @grant       GM_addStyle
// @run-at      document-start
// @updateURL   https://github.com/Nigh/JandanX/releases/latest/download/jandanX.meta.js
// @downloadURL https://github.com/Nigh/JandanX/releases/latest/download/jandanX.user.js
// @license     MIT
// @homepageURL https://github.com/Nigh/JandanX
// ==/UserScript==
`
}

async function getPackageVersion() {
	const packageJsonRaw = await fs.readFile("package.json", "utf8")
	const packageJson = JSON.parse(packageJsonRaw)

	if (!packageJson.version) {
		throw new Error("package.json 中未找到 version 字段")
	}

	return packageJson.version
}

async function buildUserscript(userscriptBanner) {
	try {
		await fs.mkdir("dist", { recursive: true })
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
		throw error
	}
}

async function buildMeta(userscriptBanner) {
	try {
		await fs.mkdir("dist", { recursive: true })
		// Extract the metadata block
		const metaContent = userscriptBanner.trim()
		await fs.writeFile("dist/jandanX.meta.js", metaContent + "\n")
		console.log("Built dist/jandanX.meta.js")
	} catch (error) {
		console.error("Error building meta.js:", error)
		throw error
	}
}

async function main() {
	const version = await getPackageVersion()
	const userscriptBanner = createUserscriptBanner(version)

	await buildUserscript(userscriptBanner)
	await buildMeta(userscriptBanner)
}
main()
