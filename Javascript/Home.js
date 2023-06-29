class Product{
    image;
    name;
    price;
    constructor(image, name, price) {
        this.image = image;
        this.name = name;
        this.price = price;
    }
}

let obj0 = new Product("../image/1.jpg", "Hoa Hồng Trắng", 200);
let obj1 = new Product("../image/2.jpg", "Hoa Đồng Tiền", 200);
let obj2 = new Product("../image/3.jpg", "Hoa Hồng Đỏ", 100);
let obj3 = new Product("../image/4.jpg", "Hoa Hướng Dương 1", 150);
let obj4 = new Product("../image/5.jpg", "Hoa Hướng Dương 2", 200);
let obj5 = new Product("../image/6.jpg", "Lẵng hoa hồng đỏ", 200);
let obj6 = new Product("../image/7.jpg", "Hoa tuyết cẩm", 500);

let listProduct = [obj0, obj1, obj2, obj3, obj4, obj5, obj6];
// function to show list product in Home page
function showProductForHome(){
    let str = "";
    for(let i = 0; i<listProduct.length; i++){
        str += "<div class='box'><div class='image'>"
            + "<img src=" + listProduct[i].image + "><br>"
            + "<input type='submit' value='ADD TO CART'>"
            + "<p>" + listProduct[i].name + "</p>"
            + "<p>" + listProduct[i].price +" USD</p>"
            + "</div></div>";
    }
    document.getElementById("listProduct").innerHTML = str;
}
// function to add item to cart
function addItemToCart(){

}
// function to search item in home page
showProductForHome();



    
