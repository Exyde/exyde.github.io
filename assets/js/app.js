// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");
if (scrollUp){
  scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

//Toggle the menu items.
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
if (burger){
  burger.addEventListener("click", () => {
      ul.classList.toggle("show");
    });
}

// Close hamburger menu when a link is clicked
const menuItem = document.querySelectorAll(".MenuItem");
if (menuItem){
  menuItem.forEach((item) =>
  item.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

}





