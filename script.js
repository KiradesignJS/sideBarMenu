const navBar = document.querySelector("nav"),
      menuBtns = document.querySelectorAll(".icon-logo, .icon-logo-sidebar"),
      overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {  //menu icon action
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click",() => {  //overlay action
  navBar.classList.remove("open");
});