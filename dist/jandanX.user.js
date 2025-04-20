
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

(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/jandanX.css
  var jandanX_default;
  var init_jandanX = __esm({
    "src/jandanX.css"() {
      jandanX_default = ":root {\r\n	--jd-bg: #000000;\r\n	--jd-primary: #ffc107;\r\n	--jd-white: #ffffff;\r\n	--jd-plain: #cccccc;\r\n	--jd-dim: #999999;\r\n	--jd-dark: #666666;\r\n	--jd-text-dark: #222222;\r\n	--jd-bg-dark: #222222;\r\n	--jd-bad: #d36969;\r\n	--jd-good: #69d3a6;\r\n	--jd-border: #e5e5e5;\r\n}\r\n\r\nbody {\r\n	margin: 0;\r\n	font-family: Arial, sans-serif;\r\n	background-color: var(--jd-bg);\r\n	color: var(--jd-plain);\r\n}\r\n#x-like-layout {\r\n	display: flex;\r\n	flex-direction: column;\r\n	height: 100vh;\r\n	width: 100%;\r\n}\r\nul > li {\r\n	color: var(--jd-plain) !important;\r\n}\r\n\r\na {\r\n	color: var(--jd-primary) !important;\r\n}\r\na.unlike,\r\n.comment-row .xx {\r\n	color: var(--jd-bad) !important;\r\n}\r\n.comment-row .oo {\r\n	color: var(--jd-primary) !important;\r\n}\r\ndiv.hot-title {\r\n	background-color: var(--jd-bg-dark) !important;\r\n}\r\n\r\nh2.post-title > a {\r\n	color: var(--jd-primary) !important;\r\n}\r\ndiv.post-tag > a {\r\n	color: var(--jd-text-dark) !important;\r\n}\r\ndiv.post-excerpt {\r\n	color: var(--jd-dim) !important;\r\n}\r\ndiv.post-comment-count {\r\n	display: none !important;\r\n}\r\n.comment-content {\r\n	color: var(--jd-plain) !important;\r\n}\r\nh3.nav-header {\r\n	color: var(--jd-dark) !important;\r\n}\r\nnav.breadcrumb {\r\n	background-color: transparent !important;\r\n}\r\n\r\ndiv.search-form {\r\n	background-color: transparent !important;\r\n}\r\ninput#bingsearch {\r\n	background-color: var(--jd-bg-dark) !important;\r\n	color: var(--jd-plain) !important;\r\n	border: 1px solid var(--jd-plain);\r\n	border-radius: 12px;\r\n	padding: 12px 16px;\r\n}\r\nul.hot-tabs > li.current {\r\n	background-color: var(--jd-bg-dark) !important;\r\n	color: var(--jd-primary) !important;\r\n}\r\nbutton {\r\n	background-color: var(--jd-bg-dark) !important;\r\n	color: var(--jd-plain) !important;\r\n	border: 1px solid var(--jd-plain);\r\n	cursor: pointer;\r\n}\r\nbutton.active {\r\n	background-color: var(--jd-primary) !important;\r\n	color: var(--jd-text-dark) !important;\r\n}\r\n\r\n.post blockquote {\r\n	background-color: var(--jd-bg-dark) !important;\r\n	color: var(--jd-plain) !important;\r\n	border-left: 4px solid var(--jd-good) !important;\r\n	padding: 12px 16px;\r\n}\r\n\r\n.top-nav .current {\r\n	background-color: var(--jd-primary) !important;\r\n}\r\n.top-nav .current > a {\r\n	color: var(--jd-text-dark) !important;\r\n}\r\n\r\ndiv.page-navi > a {\r\n	background-color: transparent !important;\r\n	border: 1px solid var(--jd-plain) !important;\r\n}\r\n\r\n.nav-next,\r\n.nav-prev {\r\n	font-size: 8em;\r\n	position: sticky;\r\n	height: fit-content;\r\n	top: 40%;\r\n}\r\n#header {\r\n	color: white;\r\n	padding: 16px;\r\n	font-size: 20px;\r\n	text-align: center;\r\n	font-weight: bold;\r\n}\r\n#layout-row {\r\n	display: flex;\r\n	flex: 1;\r\n	max-width: 1200px;\r\n	margin: 0 auto;\r\n	width: 100%;\r\n	gap: 16px;\r\n	padding: 16px;\r\n	box-sizing: border-box;\r\n}\r\nnav#nav {\r\n	background-color: transparent !important;\r\n}\r\n.new-nav {\r\n	flex: 0 0 200px;\r\n	padding: 16px;\r\n	border-radius: 12px;\r\n	height: fit-content;\r\n	position: sticky;\r\n	top: 16px;\r\n}\r\ndiv#navbar {\r\n	flex-direction: column !important;\r\n	align-items: start;\r\n}\r\ndiv#navbar > div {\r\n	position: relative !important;\r\n}\r\nul.navbar-nav {\r\n	flex: 0 0 200px;\r\n	flex-direction: column !important;\r\n}\r\n.main .header-h1 {\r\n	background-color: transparent !important;\r\n}\r\nmain.main {\r\n	flex: 1;\r\n	background-color: transparent;\r\n	padding: 0px 16px;\r\n	border-radius: 0px;\r\n}\r\naside.sidebar {\r\n	flex: 0 0 300px;\r\n	background-color: transparent !important;\r\n	padding: 16px;\r\n	border-radius: 12px;\r\n	border: 1px solid var(--jd-border);\r\n	height: fit-content;\r\n	position: sticky;\r\n	top: 16px;\r\n}\r\n#footer {\r\n	background-color: #1da1f2;\r\n	color: white;\r\n	text-align: center;\r\n	padding: 12px;\r\n}\r\n@media (max-width: 768px) {\r\n	#layout-row {\r\n		flex-direction: column;\r\n	}\r\n	#nav,\r\n	aside.sidebar {\r\n		display: none;\r\n	}\r\n}\r\n.ugc-form textarea {\r\n	background-color: var(--jd-bg-dark) !important;\r\n	color: var(--jd-plain) !important;\r\n	border: 1px solid var(--jd-plain);\r\n	padding: 12px 16px;\r\n}\r\n.twitter-style-nav {\r\n	display: flex;\r\n	align-items: center;\r\n}\r\n\r\n.twitter-style-nav > a {\r\n	width: 100%;\r\n	padding: 12px 12px !important;\r\n	border-radius: 9999px;\r\n	cursor: pointer;\r\n}\r\n.twitter-style-nav > a:hover {\r\n	color: var(--jd-dark) !important;\r\n	background-color: var(--jd-primary) !important;\r\n	font-weight: 500;\r\n	transition: background-color 0.2s;\r\n}\r\n";
    }
  });

  // src/jandanX.js
  var require_jandanX = __commonJS({
    "src/jandanX.js"() {
      init_jandanX();
      (function() {
        "use strict";
        const earlyCSS = `
        html, body {
			margin: 0;
			font-family: Arial, sans-serif;
			background-color: #000000;
			color: #ffc107cf;
		}
    `;
        const style = document.createElement("style");
        style.textContent = earlyCSS;
        window.addEventListener("DOMContentLoaded", () => {
          document.head.insertBefore(style, document.head.firstChild);
        });
        window.addEventListener("load", () => {
          const items = document.querySelectorAll("li.nav-item");
          items.forEach((item) => {
            item.classList.add("twitter-style-nav");
          });
          const last_nav_item = document.querySelector("div#navbar > div");
          last_nav_item.classList.add("twitter-style-nav");
          const nav_next = document.querySelector("div.nav-next");
          const nav_prev = document.querySelector("div.nav-prev");
          const header = document.getElementById("header");
          const nav = document.getElementById("nav");
          const main = document.querySelector("main.main");
          const sidebar = document.querySelector("aside.sidebar");
          const footer = document.getElementById("footer");
          console.log(nav_next);
          document.body.innerHTML = "";
          const layout = document.createElement("div");
          layout.id = "x-like-layout";
          document.body.appendChild(layout);
          const newNav = document.createElement("div");
          newNav.classList.add("new-nav");
          newNav.appendChild(header);
          newNav.appendChild(nav);
          const layoutRow = document.createElement("div");
          layoutRow.id = "layout-row";
          if (nav_next) {
            layoutRow.appendChild(nav_next);
          }
          layoutRow.appendChild(newNav);
          layoutRow.appendChild(main);
          layoutRow.appendChild(sidebar);
          if (nav_prev) {
            layoutRow.appendChild(nav_prev);
          }
          layout.appendChild(layoutRow);
          layout.appendChild(footer);
          GM_addStyle(jandanX_default);
          console.log("jandanX loaded");
        });
      })();
    }
  });
  require_jandanX();
})();
