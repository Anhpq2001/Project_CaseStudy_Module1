// listProduct
let listProduct = new Array();


// function to show list product
function showListProduct(){
    let str = "<table border='1 solid white'> ";

    for (let i = 0; i < listProduct.length; i++) {
        str += "<tr onclick='checkIndex("+ i +")'> <td  style='width: 300px'>" + ListProduct[i] + "</td>"
            + "<td ><button onclick='updateProductToList(" + i + ")'>Edit</button></td> " +
            "<td><button onclick='deleteProductFromList(" + i + ")'>Delete</button></td> </tr>"
    }
    str += "</table>"
    document.getElementById("listProdcut").innerHTML = str
}

// function delete item form list product
function deleteProductFromList(index) {
    for(let i=index; i<listProduct.length-1; i++){
        listProduct[i] = listProduct[i+1];
    }
    product.length--;
    displayProduct();
}

// function update item in list product
function updateItemInListProduct(){
    let updateItem = document.getElementById("addId").value;
    listProduct[index] = updateItem;
    displayProduct();
}

// function to check index