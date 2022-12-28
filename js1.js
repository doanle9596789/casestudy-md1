class Product {
    constructor(name, price, number, img) {
        this.name = name;
        this.price = price;
        this.number = number;
        this.img = img;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }

    getNumber() {
        return this.number;
    }

    setNumber(value) {
        this.number = value;
    }
    getImg(){
        return this.img;
    }
    setImg(value) {
        this.img = value;
    }
}
let products = [
    new Product('Cây bon sai',1200,100,"https://tse2.mm.bing.net/th?id=OIP.2s5IpnouI1yf0FFg6YCo2gHaHa&pid=Api&P=0"),
    new Product('Cây ăn qua',3200,50,"https://tse3.mm.bing.net/th?id=OIP.rZfJoJDrld-BBIayoleJiQHaJV&pid=Api&P=0"),
    new Product('Cây cổ thụ',300,20,"https://tse1.mm.bing.net/th?id=OIP.hylN2Omk1XBR_wBapX8BwAHaFy&pid=Api&P=0"),
];
function showProduct(){
    let count = "";
    let numberProduct=0;
    for (let i= 0;i<products.length;i++){
        numberProduct += products[i].number
        count += "<tr>" +
            "<td>"+ products[i].name + "</td>" +
            "<td>"+ products[i].price + "</td>" +
            "<td>"+ products[i].number + "</td>" +
            "<td>"+ products[i].img +"</td>" +
            "<td><img src='"+products[i].img +"'></td>"+
            "<td><button onclick='deleteByIndex("+i+")'>Xóa sản phẩm</button> </td>"+
            "</tr>"
    }
    document.getElementById("listProduct").innerHTML= count;
    document.getElementById("numberOfProduct").innerHTML= numberProduct.toString();
}
showProduct();
function createNewProduct(){
    let name = document.getElementById("productName").value;
    let price = document.getElementById("price").value;
    let number = document.getElementById("number").value;
    let img = document.getElementById("img").value;
    let newP = new Product(name,price,Number(number),img);
    products.push(newP);
    showProduct();
}
function deleteByIndex(index) {
    products.splice(index, 1);
    showProduct();
}