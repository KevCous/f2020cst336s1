/*global $*/
/*global localStorage*/

var nbp1 = localStorage.getItem("nbp1");
var nbp2 = localStorage.getItem("nbp2");

$("#p1").on("click", function () {
    localStorage.setItem("nbp1", ++nbp1);
    window.location.href = "cart.html";
});

$("#p2").on("click", function () {

    localStorage.setItem("nbp2", ++nbp2);
    window.location.href = "cart.html";
});