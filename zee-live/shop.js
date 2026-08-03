/**
 * shop.js
 * Runs only on shop.html
 */

import { products } from "./products.js";


// ================= DOM =================

let shopGrid = document.querySelector(".shop-grid");
let countp = document.querySelector("#countp");


// ================= CREATE PRODUCT CARD =================

function productsHandler(id, name, category, price, image) {


    let card = document.createElement("div");
    card.classList.add("shop-card");
    card.dataset.id = id;



    // Thumbnail

    let thumb = document.createElement("div");
    thumb.classList.add("shop-card-thumb");



    // Wishlist Button

    let wishBtn = document.createElement("button");
    wishBtn.classList.add("wish-toggle");

    wishBtn.innerHTML = `
        <i class="fa-regular fa-heart"></i>
    `;



    // Image

    let img = document.createElement("img");

    img.src = image;
    img.alt = name;



    // Category

    let cat = document.createElement("p");

    cat.classList.add("shop-card-cat");
    cat.textContent = category;



    // Name

    let title = document.createElement("h3");

    title.textContent = name;



    // Rating

    let rating = document.createElement("div");

    rating.classList.add("shop-rating");

    rating.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <span>(4.5)</span>
    `;



    // Price

    let priceRow = document.createElement("div");

    priceRow.classList.add("shop-price-row");



    let priceText = document.createElement("span");

    priceText.classList.add("price-now");

    priceText.textContent = "$" + price;



    // Cart Button

    let cartBtn = document.createElement("button");

    cartBtn.classList.add("add-cart-btn");

    cartBtn.innerHTML = `
        <i class="fa-solid fa-bag-shopping"></i>
    `;



    thumb.append(wishBtn,img);

    priceRow.append(priceText,cartBtn);



    card.append(
        thumb,
        cat,
        title,
        rating,
        priceRow
    );



    shopGrid.appendChild(card);

}





// ================= RENDER PRODUCTS =================

function renderProducts(list){


    if(!shopGrid) return;


    shopGrid.innerHTML = "";


    list.forEach(function(product){

        productsHandler(
            product.id,
            product.name,
            product.category,
            product.price,
            product.image
        );

    });


    if(countp){

        countp.textContent = list.length;

    }

}





// initial load

renderProducts(products);





// ================= CATEGORY COUNT =================


function showCategoryCount(category,id){


    let count = products.filter(function(product){

        return product.category === category;

    });


    let element = document.querySelector(id);


    if(element){

        element.textContent = count.length;

    }

}



showCategoryCount("Running","#run");
showCategoryCount("Basketball","#basketball");
showCategoryCount("Casual","#casual");
showCategoryCount("Lifestyle","#lifestyle");






// ================= FILTER =================


let filterBtn = document.querySelector(".apply-filter-btn");


if(filterBtn){

filterBtn.addEventListener("click",function(){


    let selected = document.querySelector(
        'input[name="category"]:checked'
    );


    if(!selected){

        renderProducts(products);
        return;

    }



    let filtered = products.filter(function(product){

        return product.category === selected.value;

    });



    renderProducts(filtered);



});

}






// ================= CLEAR FILTER =================


let clearBtn = document.querySelector(".filter-clear");


if(clearBtn){


clearBtn.addEventListener("click",function(){


    document.querySelectorAll(
        'input[name="category"]'
    ).forEach(function(radio){

        radio.checked=false;

    });


    renderProducts(products);



});


}







// ================= SORT =================


let sortSelect = document.querySelector(".sort-select");


if(sortSelect){


sortSelect.addEventListener("change",function(){



    let sorted = [...products];



    if(this.value==="ltoh"){


        sorted.sort(function(a,b){

            return a.price-b.price;

        });


    }



    else if(this.value==="htol"){


        sorted.sort(function(a,b){

            return b.price-a.price;

        });


    }



    renderProducts(sorted);



});


}








// ================= CART + WISHLIST =================



if(shopGrid){



shopGrid.addEventListener("click",function(e){



    let card = e.target.closest(".shop-card");


    if(!card) return;



    let id = Number(card.dataset.id);



    let product = products.find(function(item){

        return item.id===id;

    });





    // ADD WISHLIST


    if(e.target.closest(".wish-toggle")){


        let wishlist = JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];



        let exist = wishlist.find(function(item){

            return item.id===id;

        });



        if(!exist){


            wishlist.push(product);


            localStorage.setItem(
                "wishlist",
                JSON.stringify(wishlist)
            );


            if(window.updateWishlistCount){

                window.updateWishlistCount();

            }


        }


    }







    // ADD CART


    if(e.target.closest(".add-cart-btn")){


        let cart = JSON.parse(
            localStorage.getItem("cart")
        ) || [];



        let exist = cart.find(function(item){

            return item.id===id;

        });



        if(exist){

            alert("Already in Cart");

            return;

        }



        cart.push(product);



        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );



        if(window.updateCartCount){

            window.updateCartCount();

        }



        alert("Added to Cart");



    }





});

}