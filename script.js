fetch("https://kea-alt-del.dk/t5/api/liveproductlist?category=starter")
         .then(function (response) {
             console.log(response)
             return response.json();
         })
     .then(function(data) {
             dataReceived(data);
         })

function dataReceived(products) {
    products.forEach(showProduct)
}

function showProduct(myProduct) {
    console.log(myProduct)
    const temp = document.querySelector("#productTemplate").content;
    const myCopy = temp.cloneNode(true);
    myCopy.querySelector(".dish_name").textContent = myProduct.name;
    const parentElem = document.querySelector("section#starter");
    parentElem.appendChild(myCopy)
          }
