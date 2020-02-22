/*global $*/
/*global localStorage*/

// getting the value of each local storage value of each value
var nbp1 = localStorage.getItem("nbp1");
var nbp2 = localStorage.getItem("nbp2");

// printing quantity of each product
$("#nbp1").text("Quantity: " + nbp1);
$("#nbp2").text("Quantity: " + nbp2);
$("#errorDisplay").text("");

// Functions for adding a product to cart
// when we click the button add
$("#a1").on("click", function () {
    localStorage.setItem("nbp1", ++nbp1);
    // reload the page
    window.location.href = "cart.html";
});
$("#a2").on("click", function () {
    localStorage.setItem("nbp2", ++nbp2);
    // reload the page
    window.location.href = "cart.html";
});

// Functions for removing a product to cart
// when we click the button add
document.querySelector("#p1").addEventListener("click", function () {
    if (nbp1 <= 0) return;

    localStorage.setItem("nbp1", --nbp1);
    // reload the page
    window.location.href = "cart.html";
});
document.querySelector("#p2").addEventListener("click", function () {
    if (nbp2 <= 0) return;

    localStorage.setItem("nbp2", --nbp2);
    // reload the page
    window.location.href = "cart.html";
});

// Verifying if the user has something to buy
// for checkout if not print an error message
$("#co").on("click", function () {
    if (nbp1 == 0 && nbp2 == 0){
        $("#errorDisplay").text("You must buy a product to checkout!");
        return;
    }
    // make the form appear and remove the checkout button
    $("#f1").removeAttr("hidden");
    $("#f1").show("slow");
    $("#co").hide("slow");
});

// cancel the checkout
$("#c").on("click", function () {
    // reload the page
    $("#f1").hide("slow");
    $("#co").show("slow");
});

// Do the checkout, reset the quantity of each product
$("#f1").submit(function(event){
    // Check again if the user has something to buy
    if (nbp1 == 0 && nbp2 == 0){
        $("#errorDisplay").text("You must buy a product to checkout!");
        return;
    }

    localStorage.setItem("nbp1", 0);
    localStorage.setItem("nbp2", 0);
    alert("Thank you for your paiment");
});