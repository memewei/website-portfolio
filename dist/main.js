/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval(
          'const navMenu = document.querySelector(".nav-menu");\nconst navToggle = document.querySelector(".nav-toggle");\nconst navClose = document.querySelector(".nav-close");\nconst navLink = document.querySelectorAll(".nav-link");\nconst skillsContent = document.querySelector(".skills-content");\nconst skillsHeader = document.querySelectorAll(".skills-header");\nconst tabs = document.querySelectorAll("[data-target]");\nconst tabContents = document.querySelectorAll("[data-content]");\n\nif (navToggle) {\n  navToggle.addEventListener("click", () => {\n    navMenu.classList.add("show-menu");\n  });\n}\n\nif (navClose) {\n  navClose.addEventListener("click", () => {\n    navMenu.classList.remove("show-menu");\n  });\n}\n\nfunction linkAction() {\n  navMenu.classList.remove("show-menu");\n}\nnavLink.forEach((link) => link.addEventListener("click", linkAction));\n\nfunction toggleSkills() {\n  let itemClass = this.parentNode.className;\n\n  for (i = 0; i < skillsContent.length; i++) {\n    skillsContent[i].className = "skills-content close";\n  }\n  if (itemClass === "skills-content close") {\n    this.parentNode.className = "skills-content open";\n  }\n}\nskillsHeader.forEach((skill) => skill.addEventListener("click", toggleSkills));\n\ntabs.forEach((tab) =>\n  tab.addEventListener("click", () => {\n    const target = document.querySelector(tab.dataset.target);\n    tabContents.forEach((tabContent) =>\n      tabContent.classList.remove("qualification-active"),\n    );\n    target.classList.add("qualification-active");\n    tab.forEach((tab) => tab.classList.remove("qualification-active"));\n    tab.classList.add("qualification-active");\n  }),\n);\n\n\n//# sourceURL=webpack://website-portfolio/./src/index.js?',
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();
