// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//Toggle the menu items.
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

// Close hamburger menu when a link is clicked

// Select nav links
const menuItem = document.querySelectorAll(".MenuItem");

menuItem.forEach((item) =>
  item.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

menuItem.forEach((item) =>
  item.addEventListener("mouseOver", () => {
    item.style.color = "purple";
  })
);

//Nav hovering




