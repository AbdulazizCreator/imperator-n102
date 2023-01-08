window.addEventListener("scroll", function () {
    toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backtop.style.opacity = 1;
    } else {
      backtop.style.opacity = 0;
    }
  }
  
  function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-1500px";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 100
    ) {
      navbar.classList.add("navbar-shrink");
      // navbar.style.padding = "60px 0 15px";

    } else {
      navbar.classList.remove("navbar-shrink");
      // navbar.style.padding = "73px 0 20px";
    }
  }
  let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "../images/light-dark.svg";
  } else {
    this.firstElementChild.src = "../images/light-dark.svg";
  }
  document.body.classList.toggle("dark");
});


// const link = document.getElementById("link");
//  function active() {
//   document.getElementById("about").style.display = "block";
//  }
