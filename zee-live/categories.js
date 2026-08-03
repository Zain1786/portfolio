


import { products } from "./products.js";

// let page = document.querySelector(".page-section");
// page.addEventListener("click",function(e){
//     e.preventDefault();
//    page.a = "hello";
// })

function countCategory(cat, id) {

    let count = products.filter(function(product) {
        return product.category === cat;
    });

    let element = document.querySelector(id);

    element.textContent = count.length;
}
countCategory("Running", "#runc");
countCategory("Casual", "#casualc");
countCategory("Basketball", "#basketballc");
countCategory("Lifestyle", "#lifestylec");
   



function categorizeing(categoryValue){

    let filteredProducts = products.filter(product=>{
        return product.category === categoryValue;
    });

    shopGrid.innerHTML = "";

    filteredProducts.forEach(product=>{
        productsHandler(
            product.name,
            product.category,
            product.price,
            product.image
        );
    });
}
