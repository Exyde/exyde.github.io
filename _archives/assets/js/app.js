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
