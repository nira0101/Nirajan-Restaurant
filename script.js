fetch("https://kea-alt-del.dk/t5/api/productlist")
         .then(function (response) {
             console.log(response)
             return response.json();
         })
     .then(function(data) {
             dataReceived(data);
         })

function dataReceived(products) {

    products.forEach(showProduct);
}

function showProduct(myProduct) {
    console.log("mProduct")

    const temp = document.querySelector("#productTemplate").content;
    const myCopy = temp.cloneNode(true);

    const article = myCopy.querySelector("article");
    if(myProduct.vegeterian){
          article.classList.add("vegeterian");
    }


    myCopy.querySelector(".data_name").textContent = myProduct.name;
     myCopy.querySelector(".data_price").textContent = myProduct.price;
    const parentElem = document.querySelector("section#starter");
    parentElem.appendChild(myCopy);


}


