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

	const style = document.createElement("style")
	style.textContent = earlyCSS
	window.addEventListener("DOMContentLoaded", () => {
		document.head.insertBefore(style, document.head.firstChild)
	})
	window.addEventListener("load", () => {
		const items = document.querySelectorAll("li.nav-item")
		items.forEach((item) => {
			item.classList.add("twitter-style-nav")
		})
		const last_nav_item = document.querySelector("div#navbar > div")
		last_nav_item.classList.add("twitter-style-nav")

		// Get the necessary elements
		const nav_next = document.querySelector("div.nav-next")
		const nav_prev = document.querySelector("div.nav-prev")
		const header = document.getElementById("header")
		const nav = document.getElementById("nav")
		const main = document.querySelector("main.main")
		const sidebar = document.querySelector("aside.sidebar")
		const footer = document.getElementById("footer")
		console.log(nav_next)

		// Clear existing body and create a new layout
		document.body.innerHTML = ""
		const layout = document.createElement("div")
		layout.id = "x-like-layout"
		document.body.appendChild(layout)

		const newNav = document.createElement("div")
		newNav.classList.add("new-nav")
		newNav.appendChild(header)
		newNav.appendChild(nav)
		// Create main layout container (3 columns)
		const layoutRow = document.createElement("div")
		layoutRow.id = "layout-row"
		if (nav_next) {
			layoutRow.appendChild(nav_next)
		}
		layoutRow.appendChild(newNav) // Left column
		layoutRow.appendChild(main) // Center
		layoutRow.appendChild(sidebar) // Right column
		if (nav_prev) {
			layoutRow.appendChild(nav_prev)
		}
		layout.appendChild(layoutRow)

		// Add footer
		layout.appendChild(footer)

		// Add styles
		GM_addStyle(css)
		console.log("jandanX loaded")
	})
})()
