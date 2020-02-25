// let slideIndex = 0;

// function carousel() {
//   let x = document.getElementsByClassName("deals");
//   for (let i = 0; i < x.length; i++) x[i].style.display = "none";

//   slideIndex++;
//   if (slideIndex > x.length) {
//     slideIndex = 1;
//   }
//   x[slideIndex - 1].getElementsByClassName.display = "block";
//   setTimeout(carousel, 2000);
// }

// carousel();

let menu = document.querySelector(".menu-btn");

if (menu) {
  menu.addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
} else {
  console.log("not working");
}
