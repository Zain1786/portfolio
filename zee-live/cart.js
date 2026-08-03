let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartItems = document.querySelector(".cart-items");




// ================= CREATE CART CARD =================

function cartHandler(id, name, price, image, quantity){


    if(!cartItems) return;



    let card = document.createElement("div");

    card.classList.add("cart-item");

    card.dataset.id = id;



    // Image

    let thumb = document.createElement("div");

    thumb.classList.add("cart-item-thumb");



    let img = document.createElement("img");

    img.src = image;

    img.alt = name;



    thumb.appendChild(img);





    // Info

    let info = document.createElement("div");

    info.classList.add("cart-item-info");



    let title = document.createElement("h3");

    title.textContent = name;




    let detail = document.createElement("p");

    detail.textContent = "Size: 9 • Color: Black";





    // Quantity

    let qty = document.createElement("div");

    qty.classList.add("qty-selector");



    let minus = document.createElement("button");

    minus.classList.add("qty-btn");

    minus.textContent = "-";



    let count = document.createElement("span");

    count.textContent = quantity || 1;



    let plus = document.createElement("button");

    plus.classList.add("qty-btn");

    plus.textContent = "+";



    qty.append(minus,count,plus);



    info.append(title,detail,qty);






    // Price

    let priceBox = document.createElement("div");

    priceBox.classList.add("cart-item-price");



    let priceText = document.createElement("span");

    priceText.textContent =
    "$" + (price * (quantity || 1));




    let removeBtn = document.createElement("button");

    removeBtn.classList.add("remove-btn");



    let trash = document.createElement("i");

    trash.classList.add(
        "fa-solid",
        "fa-trash"
    );



    removeBtn.appendChild(trash);



    priceBox.append(
        priceText,
        removeBtn
    );



    card.append(
        thumb,
        info,
        priceBox
    );



    let continueBtn =
    document.querySelector(".continue-shopping");



    if(continueBtn){

        cartItems.insertBefore(
            card,
            continueBtn
        );

    }
    else{

        cartItems.appendChild(card);

    }



}






// ================= LOAD CART =================


cart.forEach(function(product){


    cartHandler(
        product.id,
        product.name,
        product.price,
        product.image,
        product.quantity || 1
    );


});






// ================= CART ACTIONS =================


if(cartItems){


cartItems.addEventListener(
"click",
function(e){



let card = e.target.closest(".cart-item");


if(!card) return;



let id = Number(card.dataset.id);




// REMOVE

if(e.target.closest(".remove-btn")){


    cart = cart.filter(function(product){

        return product.id !== id;

    });



    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );



    card.remove();



    updateOrderSummary();



    if(window.updateCartCount){

        window.updateCartCount();

    }


    return;

}







// QUANTITY

if(e.target.classList.contains("qty-btn")){


let product = cart.find(function(item){

    return item.id === id;

});



if(!product) return;



if(e.target.textContent === "+"){


    product.quantity =
    (product.quantity || 1)+1;


}





if(e.target.textContent === "-"){


    if((product.quantity || 1)>1){

        product.quantity--;

    }


}





localStorage.setItem(
"cart",
JSON.stringify(cart)
);




card.querySelector(
".qty-selector span"
).textContent = product.quantity;





card.querySelector(
".cart-item-price span"
).textContent =
"$" + 
(product.price * product.quantity);





updateOrderSummary();



}




});

}







// ================= ORDER SUMMARY =================


function updateOrderSummary(){


let subtotal = 0;



cart.forEach(function(product){


    subtotal += 
    product.price *
    (product.quantity || 1);


});



let shipping = 0;



if(cart.length > 0){

    shipping = 2;

}



let total = subtotal + shipping;




let sub = document.querySelector("#subtotal");

let ship = document.querySelector("#shipping");

let totalBox = document.querySelector("#total");



if(sub){

    sub.textContent =
    "$"+subtotal.toFixed(2);

}


if(ship){

    ship.textContent =
    "$"+shipping.toFixed(2);

}


if(totalBox){

    totalBox.textContent =
    "$"+total.toFixed(2);

}



}







// INITIAL UPDATE


updateOrderSummary();



if(window.updateCartCount){

    window.updateCartCount();

}


if(window.updateWishlistCount){

    window.updateWishlistCount();

}