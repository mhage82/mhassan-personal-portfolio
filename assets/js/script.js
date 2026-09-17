"use strict";

/**
 * Add or remove a class from an element.
 */
const elementToggleFunc = function (element) {
  element.classList.toggle("active");
};

/**
 * Sidebar toggle
 */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarButton = document.querySelector("[data-sidebar-btn]");

if (sidebar && sidebarButton) {
  sidebarButton.addEventListener("click", function () {
    elementToggleFunc(sidebar);

    const isExpanded = sidebar.classList.contains("active");
    sidebarButton.setAttribute("aria-expanded", String(isExpanded));

    const buttonText = sidebarButton.querySelector("span");

    if (buttonText) {
      buttonText.textContent = isExpanded ? "Hide Links" : "Show Links";
    }
  });
}

/**
 * Page navigation
 *
 * Navigation labels must correspond to article data-page values:
 * About     -> data-page="about"
 * Resume    -> data-page="resume"
 * Portfolio -> data-page="portfolio"
 */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(function (navigationLink) {
  navigationLink.addEventListener("click", function () {
    const selectedPage = navigationLink.textContent.trim().toLowerCase();

    pages.forEach(function (page) {
      const isSelectedPage = page.dataset.page === selectedPage;
      page.classList.toggle("active", isSelectedPage);
    });

    navigationLinks.forEach(function (link) {
      const isSelectedLink =
        link.textContent.trim().toLowerCase() === selectedPage;

      link.classList.toggle("active", isSelectedLink);

      if (isSelectedLink) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});