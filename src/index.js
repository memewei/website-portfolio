const navMenu = document.querySelector(".nav-menu");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const navLink = document.querySelectorAll(".nav-link");
const skillsContent = document.querySelector(".skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content close";
  }
  if (itemClass === "skills-content close") {
    this.parentNode.className = "skills-content open";
  }
}
skillsHeader.forEach((skill) => skill.addEventListener("click", toggleSkills));

tabs.forEach((tab) =>
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) =>
      tabContent.classList.remove("qualification-active"),
    );
    target.classList.add("qualification-active");
    tab.forEach((tab) => tab.classList.remove("qualification-active"));
    tab.classList.add("qualification-active");
  }),
);
