// function to add an active class to li onlcick and remove from other li
function addActiveClass() {
    var li = document.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
        });
    }
}
addActiveClass()

//add effect to the sticky nav onscroll
window.addEventListener('scroll', () =>{
  const navbar = document.querySelector('#nav')
  const navbar2 = document.querySelector('#nav2')
  navbar.classList.toggle('sticky', window.scrollY > 0)
  navbar2.classList.toggle('sticky', window.scrollY > 0)
})

//close the nav when li is clicked
const closeNavWhenLiIsClicked = () => {
  let all_li = document.querySelectorAll(".listed-item");
  all_li.forEach(function(li) {
      li.addEventListener("click", function() {
        hamburger.classList.toggle("is-active");
        mobileListedItems.classList.toggle('toggle-nav')
      });
  });
}
closeNavWhenLiIsClicked()


// for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const mobileListedItems = document.querySelector(".mobile-listed-items-container");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileListedItems.classList.toggle('toggle-nav')
});


// ------------ for the nodal

window.onresize = () => {
  // if (window.innerWidth == 425) {
  //   // console.log('Reduce Text Size');
  // }
  console.log('Hello');
}

function signIn() {
  document.documentElement.scrollTop = 0;
  // when i click the sign up toggle back the HAMBURGER MENU AND THE NAV
  hamburger.classList.toggle("is-active");
  mobileListedItems.classList.toggle('toggle-nav')
}


// // mobile sign up modal
function signIn2() {
  document.documentElement.scrollTop = 0;
  // when i click the sign up toggle back the HAMBURGER MENU AND THE NAV
  hamburger.classList.toggle("is-active");
  mobileListedItems.classList.toggle('toggle-nav')
}
// // --------- end for the modal

// reachus
function reachUs() {
  hamburger.classList.toggle("is-active");
  mobileListedItems.classList.toggle('toggle-nav')
}




//scroll reveal js implementation
// ScrollReveal().reveal('.scroll-reveal', {
//   interval: 16,
//   reset: true
// });


ScrollReveal().reveal('.mll1', { delay: 700 });
ScrollReveal().reveal('.info', { delay: 800 });
ScrollReveal().reveal('.btn', { delay: 900 });

ScrollReveal().reveal('.text1', { delay: 1000 });
ScrollReveal().reveal('.text2', { delay: 1000 });

ScrollReveal().reveal('.box', { delay: 1000 });
ScrollReveal().reveal('.reach-us', { delay: 1000 });
ScrollReveal().reveal('.pricing-section', { delay: 1000 });



//function to scroll to top button
const scrollBtn = document.querySelector(".btn-style");
const btnVisibility = () => {
  if (window.scrollY > 400) {
      scrollBtn.style.visibility = "visible";
  } else {
      scrollBtn.style.visibility = "hidden";
  }
};

document.addEventListener("scroll", () => {
  btnVisibility();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
// end


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });