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
// function to open the navbar on click
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

// for the hamburger menu
const hamburger = document.querySelector(".hamburger");
const mobileListedItems = document.querySelector(".mobile-listed-items-container");


hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileListedItems.classList.toggle('toggle-nav')
});