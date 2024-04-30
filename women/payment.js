


function openwindow() {
    document.getElementById("paymentDiv").innerHTML = "";

    var head = document.createElement("h3");
    head.innerText = "CREDIT/DEBIT CARD";

    var cardnum = document.createElement("input");
    cardnum.setAttribute("placeholder", "Card Number");

    var cardname = document.createElement("input");
    cardname.setAttribute("placeholder", "Name on Card");

    var cvvDiv = document.createElement("div");
    cvvDiv.setAttribute("id", "cvvDiv");

    var carddate = document.createElement("input");
    carddate.setAttribute("placeholder", "(MM/YY)");

    var cardcvv = document.createElement("input");
    cardcvv.setAttribute("placeholder", "CVV");

    var paynow = document.createElement("div");
    paynow.setAttribute("id", "pay");
    paynow.innerText = "PAY NOW";

    cvvDiv.append(carddate, cardcvv);
    document.getElementById("paymentDiv").append(head, cardnum, cardname, cvvDiv, paynow);
}

function pay(paymentMethod) {
    document.getElementById("paymentDiv").innerHTML = "";

    var head = document.createElement("h3");
    head.innerText = "PAYMENT DETAILS";

    var paymentInfo = document.createElement("div");
    paymentInfo.setAttribute("id", "paymentInfo");

    if (paymentMethod === "PhonePe") {
        var phonePeImg = document.createElement("img");
        phonePeImg.src = "phonepe.jpg";
        phonePeImg.classList.add("payment-image");
        var phonePeText = document.createElement("p");
        phonePeText.innerText = "Scan the QR code using PhonePe app to complete the payment.";
        document.getElementById("paymentDiv").appendChild(phonePeText);
        document.getElementById("paymentDiv").appendChild(phonePeImg);

        var confirmButton = document.createElement("button");
        confirmButton.innerText = "Confirm";
        confirmButton.setAttribute("onclick", "confirmPayment('PhonePe')");
        document.getElementById("paymentDiv").appendChild(confirmButton);
    } else if (paymentMethod === "Paytm") {
        var paytmImg = document.createElement("img");
        paytmImg.src = "paytm.jpg";
        paytmImg.classList.add("payment-image");
        var paytmText = document.createElement("p");
        paytmText.innerText = "Scan the QR code using Paytm app to complete the payment.";
        document.getElementById("paymentDiv").appendChild(paytmText);
        document.getElementById("paymentDiv").appendChild(paytmImg);

        var confirmButton = document.createElement("button");
        confirmButton.innerText = "Confirm";
        confirmButton.setAttribute("onclick", "confirmPayment('Paytm')");
        document.getElementById("paymentDiv").appendChild(confirmButton);
    }
}

function confirmPayment(paymentMethod) {
    document.getElementById("paymentDiv").innerHTML = "";

    var head = document.createElement("h3");
    head.innerText = "CONFIRM PAYMENT";

    var nameLabel = document.createElement("label");
    nameLabel.innerText = "Name: ";
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("placeholder", "Enter your name");
    nameInput.setAttribute("required", "true");

    var photoLabel = document.createElement("label");
    photoLabel.innerText = "Upload photo: ";
    var photoInput = document.createElement("input");
    photoInput.setAttribute("type", "file");
    photoInput.setAttribute("required", "true");

    var submitButton = document.createElement("button");
    submitButton.innerText = "Submit";

    var form = document.createElement("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var submittedImage = document.createElement("img");
        submittedImage.src = "orderplaced.png";
        submittedImage.classList.add("submitted-image");
        var newWindow = window.open("", "_blank");
        newWindow.document.body.appendChild(submittedImage);
    });

    form.append(head, nameLabel, nameInput, photoLabel, photoInput, submitButton);
    document.getElementById("paymentDiv").appendChild(form);
}

