var el = document.querySelector(".top-menu .about");
document.querySelector(".side-menu > ul").appendChild(el);

var sideMenuLinks = document.querySelectorAll(".side-menu a");
for (var i = 0; i < sideMenuLinks.length; i++ ) {
    sideMenuLinks[i].style.color = "green";
}

document.querySelector(".content p").innerHTML = "Здесь теперь мопед";

document.querySelector(".picture img").src = "../img/eRhpwkhAbR.jpg";

console.log(document.querySelector(".bottom-menu li:last-child").innerHTML);

