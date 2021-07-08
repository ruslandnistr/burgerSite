const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// const test = document.querySelector('.nav-links');
// const test2 = test.outerHTML;
// console.log(test2);
// test.outerHTML =  `<li><a href="#">HOME</a></li>`;
function upDateClock(){
  const clockContainer = document.querySelector('.clock');
clockContainer.innerHTML = new Date().toLocaleString('en-GB');
};
setInterval(upDateClock, 1000)

let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn = function() {
    modal.style.display = "block";
}
btn();

span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}