import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

  var leftgear = document.getElementById("gear1"), rightgear = document.getElementById("gear2"), gear = document.getElementById("gear3");
//   var bleftgear = document.getElementById("bleftgear"), brightgear = document.getElementById("brightgear"), bgear = document.getElementById("bgear");
window.addEventListener("scroll", function() {
    let gearOffSet = window.pageYOffset * 1.33333333333333
    leftgear.style.transform = "rotate("+ window.pageYOffset +"deg)";
    rightgear.style.transform = "rotate(-"+ window.pageYOffset +"deg)";
    gear.style.transform = "rotate("+ gearOffSet +"deg)";

    // bleftgear.style.transform = "rotate("+ window.pageYOffset +"deg)";
    // brightgear.style.transform = "rotate(-"+ window.pageYOffset +"deg)";
    // bgear.style.transform = "rotate("+ gearOffSet +"deg)";
});