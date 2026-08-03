/**
 * products.js
 * -----------------------------------------------------------------------
 * The ONE array every page pulls product data from. Nothing else in the
 * project should define its own copy of this list — shop.js and
 * categories.js both `import` it.
 *
 * Exported as a named export (`export const products`) rather than
 * attached to `window`, so it never becomes a global variable — it only
 * exists inside whichever file explicitly imports it.
 * -----------------------------------------------------------------------
 */

export const products = [

{
    id: 1,
    name: "Nike Air Zoom Pegasus 41",
    brand: "Nike",
    category: "Running",
    price: 140,
      image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d7df4815-2375-4608-8d2a-1772a7d7ad03/AIR+ZOOM+PEGASUS+41.png",
    description: "Lightweight running shoe."
},

{
    id: 2,
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Lifestyle",
    price: 160,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9d2956dd-24b5-452f-bdab-137be48c0e7a/W+NIKE+AIR+MAX+270.png",
    description: "Comfortable everyday sneaker."
},

{
    id: 3,
    name: "Nike Air Max 90",
    brand: "Nike",
    category: "Lifestyle",
    price: 150,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/22896731-9ec6-4d95-8b58-97620b3be14f/NIKE+AIR+MAX+90.png",
    description: "Classic Air Max comfort."
},

{
    id: 4,
    name: "Nike Air Max 97",
    brand: "Nike",
    category: "Lifestyle",
    price: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeFMKr-xPtpbOs-48WsljYVEfQg6zkgZgkJOKnZC5A3Tgb6cwypkbFJD6&s=10",
    description: "Premium lifestyle sneaker."
},

{
    id: 5,
    name: "Nike Air Force 1 '07",
    brand: "Nike",
    category: "Casual",
    price: 130,
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    description: "Classic streetwear icon."
},

{
    id: 6,
    name: "Nike Revolution 7",
    brand: "Nike",
    category: "Running",
    price: 90,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cd6dd402-923f-4db1-8b88-54ca099531b1/NIKE+REVOLUTION+7.png",
    description: "Daily running shoe."
},

{
    id: 7,
    name: "Nike Downshifter 13",
    brand: "Nike",
    category: "Walking",
    price: 95,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTWdtQVftVtroM1KYor_36OKp9j5c_se1BooTlTGHuESKu8e_wuDZJ1isM&s=10",
    description: "Comfortable walking shoe."
},

{
    id: 8,
    name: "Nike Winflo 11",
    brand: "Nike",
    category: "Running",
    price: 120,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/889fad53-9392-48ad-b756-9b484f749e20/WMNS+NIKE+AIR+WINFLO+11.png",
    description: "Responsive running shoe."
},

{
    id: 9,
    name: "Nike Vomero 18",
    brand: "Nike",
    category: "Running",
    price: 170,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4e21f8a6-ade5-4936-8c5e-34c4d26a44b1/NIKE+VOMERO+18.png",
    description: "Soft cushioning for long runs."
},

{
    id: 10,
    name: "Nike Invincible Run 3",
    brand: "Nike",
    category: "Running",
    price: 180,
    image: "https://www.nike.qa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwd6771eba/nk/960/f/f/9/5/8/960ff958_6d54_4687_a615_0891b4ea1f93.png",
    description: "Maximum comfort running shoe."
},

{
    id: 11,
    name: "Nike InfinityRN 4",
    brand: "Nike",
    category: "Running",
    price: 165,
    image: "https://www.nike.com.kw/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw899f83a6/nk/fbe/5/7/5/e/0/fbe575e0_b8c7_45ea_8a71_fa20ae683c06.png?sw=700&sh=700&sm=fit&q=100&strip=false",
    description: "Smooth everyday running."
},

{
    id: 12,
    name: "Nike Structure 25",
    brand: "Nike",
    category: "Running",
    price: 155,
    image: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwb699c6cd/nk/c0d/5/a/a/5/3/c0d5aa53_a6cf_42ed_8525_09332aff1d21.png?sw=700&sh=700&sm=fit&q=100&strip=false",
    description: "Supportive running shoe."
},

{
    id: 13,
    name: "Nike Journey Run",
    brand: "Nike",
    category: "Running",
    price: 110,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/56093047-a25b-482f-ab64-0a9a43285bbd/NIKE+JOURNEY+RUN.png",
    description: "Lightweight daily trainer."
},

{
    id: 14,
    name: "Nike Motiva",
    brand: "Nike",
    category: "Walking",
    price: 140,
    image: "https://static.nike.com/a/images/t_default/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/175cd5ab-5468-4cfe-ad67-19b92a86cc4a/WMNS+NIKE+MOTIVA.png",
    description: "Ultra comfortable walking shoe."
},

{
    id: 15,
    name: "Nike Flex Experience Run 12",
    brand: "Nike",
    category: "Running",
    price: 100,
    image: "https://www.nike.sa/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwfd391582/nk/ea0/b/5/9/2/0/ea0b5920_8427_465d_8c65_dfb579dbfc23.png?sw=700&sh=700&sm=fit&q=100&strip=false",
    description: "Flexible running shoe."
},

{
    id: 16,
    name: "Nike Free RN NN",
    brand: "Nike",
    category: "Running",
    price: 130,
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f686b8f3-6267-43b1-bb0e-58d1a67a35cf/NIKE+FREE+RN+FK+NEXT+NATURE.png",
    description: "Natural running experience."
},

{
    id: 17,
    name: "Air Jordan 1 Mid",
    brand: "Nike",
    category: "Basketball",
    price: 170,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3EVwKgLXjcyxTQniNdTUrWmRad4NU6p8xodTh0hYMhJwhkfbBM6308bk&s=10",
    description: "Legendary basketball shoe."
},

{
    id: 18,
    name: "Air Jordan 1 Low",
    brand: "Nike",
    category: "Basketball",
    price: 150,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ8UEk1pwvk35qvFiJX5Xvj3vkKhdieH95nCrjhouoH-kjII_FvxP0C_g&s=10",
    description: "Low-top basketball sneaker."
},

{
    id: 19,
    name: "Air Jordan 1 High",
    brand: "Nike",
    category: "Basketball",
    price: 190,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSbhq1plu6WCPccNd52T_8axocnBslbeYRhSVsQKH5w&s",
    description: "Premium high-top Jordan."
},

{
    id: 20,
    name: "Nike Giannis Freak 6",
    brand: "Nike",
    category: "Basketball",
    price: 165,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb45WTOBCLZewAS2JBloqPGOCOl_IssdJXzJhUEXrAPsLsZmLXeokyG8QK&s=10",
    description: "Built for explosive movement."
}

];
