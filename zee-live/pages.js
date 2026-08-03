/**
 * pages.js
 * Common functions for all pages
 */


// ================= HAMBURGER MENU =================

let icon = document.querySelector(".icon");
let menu = document.querySelector("#menu");


if(icon && menu){

    let bar = icon.querySelector("i");


    icon.addEventListener("click", function(){

        menu.classList.toggle("active");


        if(menu.classList.contains("active")){

            bar.classList.remove("fa-bars");
            bar.classList.add("fa-xmark");

        }
        else{

            bar.classList.remove("fa-xmark");
            bar.classList.add("fa-bars");

        }

    });

}




// ================= SCROLL REVEAL =================

let revealElements = document.querySelectorAll(".reveal");


function runReveal(){

    let windowHeight = window.innerHeight;


    revealElements.forEach(function(element){

        let elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }
        else{

            element.classList.remove("show");

        }

    });

}


window.addEventListener("scroll", runReveal);
window.addEventListener("DOMContentLoaded", runReveal);





// ================= CART COUNT =================

function updateCartCount(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = 0;


    cart.forEach(function(product){

        total += Number(product.quantity) || 1;

    });



    let cartCount = document.querySelector("#cart-count");


    if(cartCount){

        cartCount.textContent = total;

    }

}





// ================= WISHLIST COUNT =================

function updateWishlistCount(){

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];


    let wishlistCount = document.querySelector("#wishlist-count");


    if(wishlistCount){

        wishlistCount.textContent = wishlist.length;

    }

}





// ================= PAGE LOAD =================

updateCartCount();
updateWishlistCount();