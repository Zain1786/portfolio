let img = document.querySelector("#s1");
let header = document.querySelector(".header");
let btn = document.querySelector(".shop-btn");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let black = document.querySelector(".black");
let badge = document.querySelector(".badge");

header.style.background = "linear-gradient( 135deg, #0e223d 0%, #205abd 35%, #7f9ef3 70%, #d3dbec 100%)";


function eventadd(val, background, image){

    val.addEventListener("mouseenter", function(){

        header.style.background = background;
        img.src = image;
        badge.style.backgroundColor = "white";
        badge.style.color = "black";

    });

}
eventadd(
    green,
    "linear-gradient(135deg, #092b0c 0%, #1d843f 35%, #49ea4e 70%, #f8f5f4 100%)",
    "images/shoe3.png"
);
eventadd(
    red,
    "linear-gradient( 135deg, #4b0d0d 0%, #a91b1b 35%, #e67e7e 70%, #f8f5f4 100%)",
    "images/shoe2.png"
);
eventadd(
    black,
    "linear-gradient( 135deg, #0e0e0e 0%, #141413 35%, #8e8686 70%, #f8f5f4 100%)",
    "images/shoe1.png"
);
eventadd(
    blue,
    
    "linear-gradient( 135deg, #0e223d 0%, #205abd 35%, #7f9ef3 70%, #d3dbec 100%)",
    "images/shoe.png"
);

let data =[
    
       {
        color:"linear-gradient( 135deg, #4b0d0d 0%, #a91b1b 35%, #e67e7e 70%, #f8f5f4 100%)",
        img:"images/shoe2.png"
    },
    {
        color:"linear-gradient( 135deg, #092b0c 0%, #1d843f 35%, #49ea4e 70%, #f8f5f4 100%)",
        img:"images/shoe3.png"
    },
    {
        color:"linear-gradient( 135deg, #0e0e0e 0%, #141413 35%, #8e8686 70%, #f8f5f4 100%)",
        img:"images/shoe1.png"
    },
    {
    color: "linear-gradient( 135deg, #0e223d 0%, #205abd 35%, #7f9ef3 70%, #d3dbec 100%)",
    img:"images/shoe.png"}
];




// let current = -1;


//     setInterval(function(){

//     current++;
    

//     if(current >= data.length){
//         current = 0;
//     }
//         header.style.background = data[current].color;
//     img.src= data[current].img;
   
//     console.log(current)

// },3000)

// let terms = document.querySelector(".terms");

// window.addEventListener("scroll", function () {

//     if (window.scrollY > 100) {
//         terms.classList.add("show");
//     } 

// });
let homeRevealElements = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


    homeRevealElements.forEach((element)=>{

        let windowHeight = window.innerHeight;
        let elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }
        else{
            element.classList.remove("show");
        }

    });

});

  
// Parent Section
let section = document.querySelector(".reviews");

// Review Grid (Sirf ek baar)
let reviewGrid = document.createElement("div");
reviewGrid.classList.add("review-grid");

section.appendChild(reviewGrid);

// ======================
// Card Function
// ======================

function createCard(image, name, review) {

    // Card
    let reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    // Top
    let reviewTop = document.createElement("div");
    reviewTop.classList.add("review-top");

    // Image
    let img = document.createElement("img");
    img.src = image;
    img.alt = name;

    // Info
    let info = document.createElement("div");

    let h4 = document.createElement("h4");
    h4.textContent = name;

    let verified = document.createElement("p");
    verified.textContent = "Verified Buyer";

    info.appendChild(h4);
    info.appendChild(verified);

    reviewTop.appendChild(img);
    reviewTop.appendChild(info);

    // Stars
    let stars = document.createElement("div");
    stars.classList.add("stars");

    for (let i = 0; i < 5; i++) {
        let star = document.createElement("i");
        star.classList.add("fa-solid", "fa-star");
        stars.appendChild(star);
    }

    // Review
    let reviewText = document.createElement("p");
    reviewText.classList.add("review-text");
    reviewText.textContent = review;

    // Append
    reviewCard.appendChild(reviewTop);
    reviewCard.appendChild(stars);
    reviewCard.appendChild(reviewText);

    reviewGrid.appendChild(reviewCard);
    
}

const reviews = [
  {
    image: "images/reviewer.png",
    name: "Ali Raza",
    review: "Amazing quality and super comfortable! Shipping was also very fast."
  },
  {
    image: "images/reviewer.png",
    name: "Sara Khan",
    review: "Best shoes I've ever bought online. Highly recommended!"
  },
  {
    image: "images/reviewer.png",
    name: "Usman Anwar",
    review: "Great customer service and return policy is very easy."
  },
  {
    image: "images/reviewer.png",
    name: "Ayesha Malik",
    review: "The shoes fit perfectly and the quality exceeded my expectations."
  },
  {
    image: "images/reviewer.png",
    name: "Bilal Ahmed",
    review: "Fast delivery and premium packaging. Loved the experience."
  },
  {
    image: "images/reviewer.png",
    name: "Fatima Noor",
    review: "Very stylish and comfortable for daily use."
  },
  {
    image: "images/reviewer.png",
    name: "Hassan Ali",
    review: "Customer support was friendly and solved my issue quickly."
  },
  {
    image: "images/reviewer.png",
    name: "Zain Khan",
    review: "Worth every penny. I will definitely order again."
  },
  {
    image: "images/reviewer.png",
    name: "Hamza Sheikh",
    review: "The colors are exactly the same as shown in the pictures."
  },
  {
    image: "images/reviewer.png",
    name: "Maryam Aslam",
    review: "Super lightweight and perfect for long walks."
  },
  {
    image: "images/reviewer.png",
    name: "Saad Iqbal",
    review: "Excellent build quality and very durable."
  },
  {
    image: "images/reviewer.png",
    name: "Ahmed Raza",
    review: "Received my order earlier than expected. Great service!"
  },
  {
    image: "images/reviewer.png",
    name: "Hira Khan",
    review: "Comfort level is outstanding. Highly satisfied."
  },
  {
    image: "images/reviewer.png",
    name: "Abdullah Tariq",
    review: "Looks premium and feels amazing while wearing."
  },
  {
    image: "images/reviewer.png",
    name: "Laiba Noor",
    review: "I have already recommended these shoes to my friends."
  },
  {
    image: "images/reviewer.png",
    name: "Danish Malik",
    review: "The material quality is excellent for this price."
  },
  {
    image: "images/reviewer.png",
    name: "Iqra Ahmed",
    review: "Very happy with my purchase. Five stars!"
  },
  {
    image: "images/reviewer.png",
    name: "Shahzaib Khan",
    review: "Perfect fitting and elegant design."
  },
  {
    image: "images/reviewer.png",
    name: "Noor Fatima",
    review: "The ordering process was smooth and delivery was quick."
  },
  {
    image: "images/reviewer.png",
    name: "Areeba Sheikh",
    review: "Excellent shopping experience. Will buy again soon."
  }
];
reviews.forEach(function(i){
    createCard(i.image,i.name,i.review);
}) 
reviews.forEach(function(i){
    createCard(i.image,i.name,i.review);
})
console.log(document.querySelectorAll(".review-card").length);