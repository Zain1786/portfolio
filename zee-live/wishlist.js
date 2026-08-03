let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

let wishlistGrid = document.querySelector(".wishlist-grid");


function wishlistHandler(id, name, category, price, image) {

    let card = document.createElement("div");
    card.classList.add("wishlist-card");
    card.dataset.id = id;


    // Thumbnail
    let thumb = document.createElement("div");
    thumb.classList.add("wishlist-thumb");


    // X Button
    let removeX = document.createElement("button");
    removeX.classList.add("wishlist-remove-x");

    let xIcon = document.createElement("i");
    xIcon.classList.add("fa-solid", "fa-xmark");

    removeX.appendChild(xIcon);



    // Image
    let img = document.createElement("img");
    img.src = image;
    img.alt = name;


    thumb.append(removeX, img);



    // Title
    let title = document.createElement("h3");
    title.textContent = name;



    // Rating
    let rating = document.createElement("div");
    rating.classList.add("shop-rating");


    for(let i = 0; i < 4; i++){

        let star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");

        rating.appendChild(star);

    }


    let halfStar = document.createElement("i");
    halfStar.classList.add("fa-solid", "fa-star-half-stroke");

    rating.appendChild(halfStar);



    let ratingText = document.createElement("span");
    ratingText.textContent = "(4.5)";

    rating.appendChild(ratingText);



    // Price
    let priceText = document.createElement("span");

    priceText.classList.add("price-now");

    priceText.textContent = "$" + price;




    // Actions
    let actions = document.createElement("div");

    actions.classList.add("wishlist-actions");



    let moveBtn = document.createElement("button");

    moveBtn.classList.add("move-cart-btn");

    moveBtn.textContent = "Move to Cart";



    let deleteBtn = document.createElement("button");

    deleteBtn.classList.add("remove-wish-btn");



    let deleteIcon = document.createElement("i");

    deleteIcon.classList.add("fa-solid", "fa-trash");

    deleteBtn.appendChild(deleteIcon);



    actions.append(moveBtn, deleteBtn);



    // Final Append
    card.append(
        thumb,
        title,
        rating,
        priceText,
        actions
    );


    wishlistGrid.appendChild(card);

}




wishlist.forEach(function(product){

    wishlistHandler(
        product.id,
        product.name,
        product.category,
        product.price,
        product.image
    );

});




// ================= CLICK EVENTS =================

wishlistGrid.addEventListener("click", function(e){



    // ================= REMOVE FROM WISHLIST =================

    if(e.target.closest(".remove-wish-btn") || e.target.closest(".wishlist-remove-x")){


        let card = e.target.closest(".wishlist-card");

        let id = Number(card.dataset.id);



        wishlist = wishlist.filter(function(product){

            return product.id !== id;

        });



        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );


        // update heart count instantly
        updateWishlistCount();


        card.remove();

    }




    // ================= MOVE TO CART =================

    if(e.target.closest(".move-cart-btn")){


        let card = e.target.closest(".wishlist-card");

        let id = Number(card.dataset.id);



        let product = wishlist.find(function(item){

            return item.id === id;

        });



        let cart = JSON.parse(localStorage.getItem("cart")) || [];



        cart.push(product);



        localStorage.setItem(
            "cart",
            JSON.stringify(cart)
        );




        wishlist = wishlist.filter(function(item){

            return item.id !== id;

        });



        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );



        // update both counts instantly
        updateCartCount();
        updateWishlistCount();



        card.remove();

    }



});