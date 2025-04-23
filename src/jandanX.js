import css from "./jandanX.css"
;(function () {
	"use strict"

	const earlyCSS = `
        html, body {
			margin: 0;
			font-family: Arial, sans-serif;
			background-color: #000000;
			color: #ffc107cf;
		}
    `
	const nav_icons = {
		首页: `M12 2C7.421 2 4 8.072 4 13.5c0 5.084 3.215 8.5 8 8.5s8-3.416 8-8.5C20 8.072 16.579 2 12 2m0 2c2.467 0 4.896 3.124 5.712 6.875L16.5 12.086l-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.5-1.5-1.5 1.5-1.212-1.212C7.104 7.124 9.533 4 12 4m0 16c-2.901 0-6-1.708-6-6.5l.003-.083L7.5 14.914l1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.5-1.5 1.5 1.5 1.497-1.497.003.083c0 4.793-3.099 6.5-6 6.5`,
		问答: `M15.333 9.5A3.5 3.5 0 0 0 8.8 7.75a1 1 0 0 0 1.733 1 1.5 1.5 0 0 1 1.3-.75 1.5 1.5 0 1 1 0 3h-.003a1 1 0 0 0-.19.039 1 1 0 0 0-.198.04 1 1 0 0 0-.155.105 1 1 0 0 0-.162.11 1 1 0 0 0-.117.174 1 1 0 0 0-.097.144 1 1 0 0 0-.043.212 1 1 0 0 0-.035.176v1l.002.011v.491a1 1 0 0 0 1 .998h.003a1 1 0 0 0 .998-1.002l-.002-.662A3.49 3.49 0 0 0 15.333 9.5m-4.203 6.79a1 1 0 0 0 .7 1.71 1.04 1.04 0 0 0 .71-.29 1.015 1.015 0 0 0 0-1.42 1.034 1.034 0 0 0-1.41 0`,
		树洞: `M20.681 2.588h-17.4c-.881 0-1.594.712-1.594 1.594v10.837c0 .881.712 1.594 1.594 1.594h1.087l-.188 5.475 4.931-5.475H20.68c.881 0 1.594-.712 1.594-1.594V4.181c0-.881-.712-1.594-1.594-1.594`,
		段子: `M12 18c4 0 5-4 5-4H7s1 4 5 4m5.555-9.168-1.109-1.664-3 2a1 1 0 0 0 .108 1.727l4 2 .895-1.789-2.459-1.229zm-6.557 1.23a1 1 0 0 0-.443-.894l-3-2-1.11 1.664 1.566 1.044-2.459 1.229.895 1.789 4-2a1 1 0 0 0 .551-.832`,
		随手拍: `M21.275 6.475h-2.405c-0.647 0 -1.203 -0.324 -1.573 -0.833l-1.064 -1.619C15.91 3.238 15.124 2.775 14.291 2.775h-4.533c-0.833 0 -1.619 0.463 -1.989 1.249l-1.064 1.619c-0.324 0.509 -0.925 0.833 -1.573 0.833H2.775c-1.018 0 -1.85 0.833 -1.85 1.85v11.1c0 1.018 0.833 1.85 1.85 1.85h18.5c1.018 0 1.85 -0.833 1.85 -1.85V8.325c0 -1.018 -0.833 -1.85 -1.85 -1.85M12.025 18.5c-3.052 0 -5.55 -2.498 -5.55 -5.55s2.498 -5.55 5.55 -5.55 5.55 2.498 5.55 5.55 -2.498 5.55 -5.55 5.55`,
		无聊图: `M21.32 2.665H2.665a1.333 1.333 0 0 0-1.333 1.333v15.99a1.333 1.333 0 0 0 1.333 1.333H21.32a1.333 1.333 0 0 0 1.333-1.333V3.998a1.333 1.333 0 0 0-1.333-1.333M5.943 5.33a1.999 1.999 0 1 1-1.999 1.999A2 2 0 0 1 5.943 5.33M3.998 17.989v-2.732l3.998-4.051a.666.666 0 0 1 .939 0l1.725 1.686-5.117 5.097Zm15.99 0H7.429l4.151-4.151 3.598-3.598a.666.666 0 0 1 .939 0l3.871 3.871Z`,
		鱼塘: `M14.346 6.005A13 13 0 0 0 14 6c-3.633 0-7.031 2.294-9.46 4.574a21 21 0 0 1-1.716-2.14 1 1 0 1 0-1.648 1.133A23 23 0 0 0 3.133 12c-.813.89-1.48 1.74-1.957 2.434a1 1 0 1 0 1.648 1.133c.41-.596.994-1.345 1.716-2.141C6.97 15.706 10.367 18 14 18q.185 0 .365-.005a11 11 0 0 1-.592-1.732 19 19 0 0 1-.545-3.332c-.167-2.218.022-4.825 1.118-6.926m2.122 11.742q.135-.03.269-.062c2.017-.492 3.559-1.843 4.562-2.985a13.7 13.7 0 0 0 1.47-2.029q.054-.091.082-.143l.023-.042.007-.013.002-.004v-.001l.001-.001-.787-.416.787.415.247-.466-.247-.466-.787.415.787-.416-.001-.002-.002-.005-.007-.012-.023-.042a11 11 0 0 0-.387-.637A14 14 0 0 0 21.3 9.3c-1.003-1.142-2.546-2.493-4.562-2.985l-.27-.062a1 1 0 0 1-.12.278c-1.033 1.648-1.294 4.005-1.125 6.25a17 17 0 0 0 .486 2.978c.226.867.47 1.447.632 1.698q.088.139.128.29zm-5.26-7.04a1 1 0 0 0-1.415-1.414c-.272.271-.47.662-.606 1.015a5.4 5.4 0 0 0-.318 1.32c-.104.928.016 2.172.924 3.08a1 1 0 0 0 1.414-1.415c-.292-.293-.422-.8-.35-1.445.033-.306.11-.594.197-.822.073-.19.134-.286.152-.313q.01-.014.001-.006zM17 11a1 1 0 0 1 1-1h.001a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1`,
		热榜: `M16.543 8.028c-.023 1.503-.523 3.538-2.867 4.327.734-1.746.846-3.417.326-4.979-.695-2.097-3.014-3.735-4.557-4.627-.527-.306-1.203.074-1.193.683.02 1.112-.318 2.737-1.959 4.378C4.107 9.994 3 12.251 3 14.517 3 17.362 5 21 9 21c-4.041-4.041-1-7.483-1-7.483C8.846 19.431 12.988 21 15 21c1.711 0 5-1.25 5-6.448 0-3.133-1.332-5.511-2.385-6.899-.347-.458-1.064-.198-1.072.375`,
		大吐槽: `M21.75 7.875V2.109a1.083 1.083 0 0 0-1.078-.994 1.1 1.1 0 0 0-.928.534c-2.475 2.007-5.588 4.585-10.247 4.585H4.003c-.066 0-.141 0-.206.019h-.028C1.969 6.244.516 7.697.516 9.497s1.453 3.253 3.253 3.253h.028c.066 0 .141.019.206.019h.685l1.566 10.256 4.659-.6-.234-1.894.947-.141-.272-1.8-.919.141-.994-5.981c.459 0 .872.019 1.134.047 4.294.366 7.087 2.822 9.366 4.688.028.028.075.066.112.094.028.019.066.028.075.047.159.094.347.141.534.141.534 0 .994-.394 1.059-.919h.019V11.12c.9 0 1.622-.722 1.622-1.622a1.596 1.596 0 0 0-1.612-1.622m-1.641 7.688c-3.319-2.541-5.747-3.975-8.981-4.341V7.781c3.234-.366 5.672-1.819 8.981-4.378z`,
		用户中心: `M21 20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2 6 6 0 0 1 6-6h6a6 6 0 0 1 6 6m-9-8a5 5 0 1 0-5-5 5 5 0 0 0 5 5`,
	}

	const style = document.createElement("style")
	style.textContent = earlyCSS
	window.addEventListener("DOMContentLoaded", () => {
		document.head.insertBefore(style, document.head.firstChild)
	})
	window.addEventListener("load", () => {
		// 重构导航栏
		const nav_div = function (a, svg) {
			let nav_item = document.createElement("div")
			nav_item.classList.add("nav-item")
			console.log("req", svg)
			if (nav_icons[svg]) {
				console.log("found", svg)
				let svg_icon = document.createElement("svg")
				let path = document.createElement("path")
				svg_icon.setAttribute("class", "nav-icon")
				svg_icon.setAttribute("width", "24")
				svg_icon.setAttribute("height", "24")
				svg_icon.setAttribute("viewBox", "0 0 24 24")
				path.setAttribute("d", nav_icons[svg])
				path.setAttribute("style", "fill:#fff")
				svg_icon.appendChild(path)
				a.innerHTML = svg_icon.outerHTML + a.innerHTML
			}
			nav_item.appendChild(a)
			return nav_item
		}
		const Nav = document.createElement("nav")
		Nav.classList.add("navbar")

		document.querySelectorAll("li.nav-item > a").forEach((a) => {
			Nav.appendChild(nav_div(a, a.innerHTML))
		})
		Nav.appendChild(
			nav_div(document.querySelector("div#navbar > div > a"), "用户中心")
		)

		// Get the necessary elements
		const header = document.getElementById("header")
		const newNav = document.createElement("div")
		newNav.classList.add("new-nav")
		newNav.appendChild(header)
		newNav.appendChild(Nav)

		const mainLayout = [
			document.querySelector("div.nav-next"),
			newNav,
			document.querySelector("main.main"),
			document.querySelector("aside.sidebar"),
			document.querySelector("div.nav-prev"),
		]
		const footer = document.getElementById("footer")

		// Clear existing body and create a new layout
		const layout = document.createElement("div")
		layout.id = "x-like-layout"
		document.body.innerHTML = ""
		document.body.appendChild(layout)

		// Create main layout container (3 columns)
		const layoutRow = document.createElement("div")
		layoutRow.id = "layout-row"
		for (let i in mainLayout) {
			const item = mainLayout[i]
			if (mainLayout[i]) {
				layoutRow.appendChild(item)
			} else {
				console.warn("Item", i, " not found:", item)
			}
		}
		layout.appendChild(layoutRow)

		// Add footer
		layout.appendChild(footer)

		// Add styles
		GM_addStyle(css)
		console.log("jandanX loaded")
	})
})()
