// Importing Navbar
$(function () {
    $("#nav-placeholder").load("navbar.html");
});

let cartArr = JSON.parse(localStorage.getItem("cart")) || []
let promo = document.querySelector("#promo")
document.querySelector(".offer").setAttribute("class", "offer info")
document.querySelector(".offer").innerText = "Use [SHOP30] To Get 30% OFF"
promo.addEventListener("click", () => {
    let userCoupon = document.querySelector("#coupon")
    if (userCoupon.value == "SHOP30" || userCoupon.value == "shop30") {
        document.querySelector(".offer").setAttribute("class", "offer cong")
        document.querySelector(".offer").innerText = "Congratulation You Got 30% Off"
        offerPrice = getTotal()
        offerPrice = (offerPrice * 0.7).toFixed(2)
        document.querySelector(".total>div>h2>span").innerText = getTotal()
        document.querySelector(".total>div>h2").style.textDecoration = 'line-through'
        document.querySelector(".total>div>h1>span").innerText = offerPrice
        document.querySelector(".total>div>h1").style.visibility = "visible"
        document.querySelector(".total>div>h1").style.position = "initial"
    } else {
        alert("Not A Valid Coupon")
    }
})


function checkCart() {
    if (cartArr.length == 0) {
        document.querySelector(".alert").setAttribute("class", "alert rem")
        document.querySelector(".alert").innerText = "Please Add Items To Cart"
    }
}

function loadCart() {
    document.querySelector(".cart").innerHTML = ""
    cartArr.forEach((product, index) => {
        let card = document.createElement("div")
        let imageDiv = document.createElement("div")
        let priceDiv = document.createElement("div")
        let prodImg = document.createElement("img")
        let prodname = document.createElement("h2")
        let prodPrice = document.createElement("h4")
        let span = document.createElement("span")
        let remove = document.createElement("button")
        let soldBy = document.createElement("p")
        prodPrice.append(document.createElement("h4"))
        prodPrice.innerText = "Price - ₹"
        soldBy.innerText = product.soldBy
        span.innerText = product.price
        prodImg.setAttribute("src", product.image)
        prodname.innerText = product.name
        remove.innerText = "Remove"

        remove.addEventListener("click", () => {
            cartArr.splice(index, 1)
            console.log(cartArr)
            localStorage.setItem("cart", JSON.stringify(cartArr))
            loadCart()
            document.querySelector(".alert").setAttribute("class", "alert rem")
            document.querySelector(".alert").innerText = product.name + " Removed From Cart"
            checkCart()
        })

        prodPrice.append(span)
        imageDiv.append(prodImg)
        priceDiv.append(prodname, soldBy, prodPrice, remove)
        card.append(imageDiv, priceDiv)
        document.querySelector(".cart").append(card)
    })

    document.querySelector(".total>div>h2>span").innerText = getTotal()
    document.querySelector(".total>div>h3>span").innerText = cartArr.length
    document.querySelector(".total>div>h1").style.visibility = "hidden"
    document.querySelector(".total>div>h1").style.position = "absolute"
    checkCart()

}
loadCart()
checkCart()

function getTotal() {
    let total = 0
    cartArr.forEach(product => {
        total += +(product.price)
    });
    return total.toFixed(2)
}

