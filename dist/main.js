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
          'const navMenu = document.querySelector(".nav-menu");\nconst navToggle = document.querySelector(".nav-toggle");\nconst navClose = document.querySelector(".nav-close");\nconst navLink = document.querySelectorAll(".nav-link");\nconst skillsContent = document.querySelectorAll(".skills-content");\nconst skillsHeader = document.querySelectorAll(".skills-header");\nconst tabs = document.querySelectorAll("[data-target]");\nconst tabContents = document.querySelectorAll("[data-content]");\nconst sections = document.querySelectorAll("section[id]");\nconst themeButton = document.getElementById("theme-button");\nconst darkTheme = "dark-theme";\nconst iconTheme = "uil-sun";\nconst selectedTheme = localStorage.getItem("selected-theme");\nconst selectedIcon = localStorage.getItem("selected-icon");\n\nif (navToggle) {\n  navToggle.addEventListener("click", () => {\n    navMenu.classList.add("show-menu");\n  });\n}\n\nif (navClose) {\n  navClose.addEventListener("click", () => {\n    navMenu.classList.remove("show-menu");\n  });\n}\n\nfunction linkAction() {\n  navMenu.classList.remove("show-menu");\n}\nnavLink.forEach((link) => link.addEventListener("click", linkAction));\n\nfunction toggleSkills() {\n  let itemClass = this.parentNode.className;\n\n  for (i = 0; i < skillsContent.length; i++) {\n    skillsContent[i].className = "skills-content close";\n  }\n  if (itemClass === "skills-content close") {\n    this.parentNode.className = "skills-content open";\n  }\n}\nskillsHeader.forEach((skill) => {\n  skill.addEventListener("click", toggleSkills);\n});\n\ntabs.forEach((tab) => {\n  tab.addEventListener("click", () => {\n    const target = document.querySelector(tab.dataset.target);\n    tabContents.forEach((tabContent) => {\n      tabContent.classList.remove("qualification-active");\n    });\n    target.classList.add("qualification-active");\n    tabs.forEach((tab) => {\n      tab.classList.remove("qualification-active");\n    });\n    tab.classList.add("qualification-active");\n  });\n});\n\nlet swiper = new Swiper(".portfolio-container", {\n  cssMode: true,\n  loop: true,\n  \n  navigation: {\n    nextEl: ".swiper-button-next",\n    prevEl: ".swiper-button-prev",\n  },\n  pagination: {\n    el: ".swiper-pagination",\n    clickable: true,\n  },\n});\n\nfunction scrollActive() {\n  const scrollY = window.pageYOffset;\n  sections.forEach((current) => {\n    const sectionHeight = current.offsetHeight;\n    const sectionTop = current.offsetTop - 50;\n    let sectionId = current.getAttribute("id");\n\n    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\n      document\n        .querySelector(".nav-menu a[href*=" + sectionId + "]")\n        .classList.add("active-link");\n    } else {\n      document\n        .querySelector(".nav-menu a[href*=" + sectionId + "]")\n        .classList.remove("active-link");\n    }\n  });\n}\n\nwindow.addEventListener("scroll", scrollActive);\n\nfunction scrollHeader() {\n  const nav = document.getElementById("header");\n  if (this.scrollY >= 80) nav.classList.add("scroll-header");\n  else nav.classList.remove("scroll-header");\n}\n\nwindow.addEventListener("scroll", scrollHeader);\n\nfunction scrollUp() {\n  const scrollUp = document.getElementById("scroll-up");\n  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");\n  else scrollUp.classList.remove("show-scroll");\n}\n\nwindow.addEventListener("scroll", scrollUp);\n\nconst getCurrentTheme = () =>\n  document.body.classList.contains(darkTheme) ? "dark" : "light";\nconst getCurrentIcon = () =>\n  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";\n\nif (selectedTheme) {\n  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](\n    darkTheme,\n  );\n  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](\n    iconTheme,\n  );\n}\n\nthemeButton.addEventListener("click", () => {\n  document.body.classList.toggle(darkTheme);\n  themeButton.classList.toggle(iconTheme);\n  localStorage.setItem("selected-theme", getCurrentTheme());\n  localStorage.setItem("selected-icon", getCurrentIcon());\n});\n\n\n//# sourceURL=webpack://website-portfolio/./src/index.js?',
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
