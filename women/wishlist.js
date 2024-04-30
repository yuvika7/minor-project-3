var wishListItems = JSON.parse(localStorage.getItem("wishListData")) || [];

function showWishList(wishListItems) {
    var mainDiv = document.querySelector("#maindiv");
    mainDiv.innerHTML = "";

    wishListItems.forEach(function (elem, index) {
        var maindiv = document.createElement("div");
        maindiv.classList.add("wishListItem");

        var priceDiv = document.createElement("div");
        priceDiv.classList.add("priceDiv");

        var div1 = document.createElement("div");
        div1.classList.add("priceDiv");

        var div2 = document.createElement("div");
        div2.setAttribute("id", "infoDiv");

        var image = document.createElement("img");
        image.setAttribute("src", elem.img);

        var brand = document.createElement("p");
        brand.innerText = elem.brand;
        brand.style.fontWeight = "bold";

        var name = document.createElement("p");
        name.innerText = elem.name;

        var price = document.createElement("p");
        price.innerText = "Rs." + elem.price;
        price.style.fontWeight = "bold";

        var strikeprice = document.createElement("p");
        strikeprice.innerText = "Rs." + elem.strikeprice;
        strikeprice.style.textDecoration = "line-through";

        var discount = document.createElement("p");
        discount.innerText = "(" + elem.discount + "% OFF)";
        discount.style.color = "#de938e";

        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            wishListItems.splice(index, 1);
            localStorage.setItem("wishListData", JSON.stringify(wishListItems));
            showWishList(wishListItems);
            document.getElementById("total").textContent = "TOTAL ITEMS : " + wishListItems.length;
        });

        div1.append(price, strikeprice, discount);
        div2.append(brand, name, div1, removeButton);
        maindiv.append(image, div2);
        mainDiv.append(maindiv);
    });
}

document.getElementById("total").textContent = "TOTAL ITEMS : " + wishListItems.length;
showWishList(wishListItems);