var cardData = JSON.parse(localStorage.getItem("bagData")) || [];
console.log(cardData);

function display(cardData) {
    document.querySelector("#itemsBox").innerHTML = "";
    cardData.forEach(function (el, i) {
        var row = document.createElement("div");
        row.setAttribute("id", "item")
        var innerdiv1 = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", el.img);
        var innerdiv2 = document.createElement("div");
        innerdiv2.setAttribute("id", "detDiv")
        var name = document.createElement("h5")
        var innerdiv3 = document.createElement("div");
        innerdiv3.setAttribute("id", "priceDiv")
        name.innerText = el.name;
        var price = document.createElement("p")
        price.style.fontWeight = "bold"
        price.innerText = "Price : " + el.price;
        var sprice = document.createElement("p")
        sprice.setAttribute("id", "sprice")
        sprice.innerText = el.strikeprice;
        sprice.style.textDecoration = "line-through"
        var qty = document.createElement("p")
        qty.style.color = "grey"
        qty.innerText = "Quantity: " + el.quntity;
        var div = document.createElement("div")
        div.setAttribute("class", "qnty")
        var p1 = document.createElement("div")
        p1.innerText = "+"
        p1.addEventListener("click", function () {
            sumofquntity(i);
        })
        var p3 = document.createElement("div")
        p3.innerText = "-"
        p3.addEventListener("click", function () {
            subofquntity(i);
        })
        div.append(p1, p3)
        innerdiv1.append(img);
        innerdiv2.append(name, innerdiv3, qty, div)
        innerdiv3.append(price, sprice)
        row.append(innerdiv1, innerdiv2);
        document.querySelector("#itemsBox").append(row);
    });
}

function Total() {
    document.querySelector("#total1").innerText = cardData.length;
    display(cardData);
}

function Total3() {
    var total = cardData.reduce(function (acc, el) {
        return acc + el.price * el.quntity
    }, 0)

    document.querySelector("#total3").innerText = total;
    display(cardData);
}

function Total2() {
    var total = cardData.reduce(function (acc, el) {
        return acc + el.price * el.quntity
    }, 0)

    document.querySelector("#total2").innerText = total;
    display(cardData);
}

function sumofquntity(i) {
    cardData[i].quntity++;
    localStorage.setItem("bagData", JSON.stringify(cardData))
    display(cardData);
    Total();
    apply();
    Total3();
}

function subofquntity(i) {
    cardData[i].quntity--;
    if (cardData[i].quntity === 0) {
        cardData.splice(i, 1); // Remove item from array if quantity is zero
    }
    localStorage.setItem("bagData", JSON.stringify(cardData));
    Total();
    apply();
    Total3();
}

function apply() {
    var total = document.getElementById("total2").innerText
    var promo = document.getElementById("promo").value
    var discount = 0
    if (promo == "cool100") {
        discount = Number(total) * 0.3
        document.getElementById("total2").innerText = Number(total) - Number(discount);
        discountprize()
    }
    else {
        document.getElementById("total2").innerText = Number(total)
        Total2()
    }
    display(cardData)
}

function discountprize() {
    var total = document.getElementById("total2").innerText
    var discount = (Number(total) * 0.3)
    document.querySelector("#discount").innerText = Math.floor(discount)
    display(cardData)
}

var apply11 = document.getElementById("check")
apply11.addEventListener("click", function () {
    apply()
})

display(cardData);
Total();
Total3();
Total2();
