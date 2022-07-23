// Importing Navbar
$(function () {
    $("#nav-placeholder").load("navbar.html");
});

let shop = [
    {
      name: 'Ventev 267360 3 Ft. Chargesync Apple Lightning Cable - White ',
      image: 'https://img.shop.com/Image/280000/281900/281909/products/1840384021.jpg?plain&size=400x400',
      price: '1399.3',
      soldBy: 'Sold by Electronic Express'
    },
    {
      name: 'ZeroDamage Glass Apple iPhone 11 Pro/X/XS (2019) Privacy Screen Protector/ ',
      image: 'https://img.shop.com/Image/290000/291200/291221/products/1924591386.jpg?plain&size=400x400',
      price: '1959.3',
      soldBy: 'Sold by Sahara Case'
    },
    {
      name: 'Fusion Idol AIP6P-JDVANDER Apple iPhone 6 Plus Skin - Mr JD Vanderbone ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1520227790.jpg?plain&size=400x400',
      price: '1225.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'ZeroDamage Glass Apple iPhone 11 Pro Max/XS Max (2019) Screen Protector/ ',
      image: 'https://img.shop.com/Image/290000/291200/291221/products/1924591356.jpg?plain&size=400x400',
      price: '2099.3',
      soldBy: 'Sold by Sahara Case'
    },
    {
      name: 'DreamWireless PLTETIP6MSCHGO Apple iPhone 6 Apple iPhone 6 Elite Series Minimalism - Champagen Gold ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1333335739.jpg?plain&size=400x400',
      price: '1092.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Clear ZeroDamage Apple iPhone 11/XR (2019) Screen Protector - Tempered Glass Screen Protector/ ',
      image: 'https://img.shop.com/Image/290000/291200/291221/products/1924591357.jpg?plain&size=400x400',
      price: '1749.3',
      soldBy: 'Sold by Sahara Case'
    },
    {
      name: 'Apple iPhone XS 256GB, Space Gray (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189413.jpg?plain&size=400x400',
      price: '25199.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 128GB, Red (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189590.jpg?plain&size=400x400',
      price: '21139.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 256GB, Coral (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937188410.jpg?plain&size=400x400',
      price: '25129.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro Max 256GB, Blue (Verizon) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937191702.jpg?plain&size=400x400',
      price: '59919.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro 128GB, Graphite (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186603.jpg?plain&size=400x400',
      price: '48929.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Fusion Idol AIP6-JDVANDER Apple iPhone 6 Skin - Mr JD Vanderbone ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1520225845.jpg?plain&size=400x400',
      price: '1225.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'ZeroDamage Apple iPhone 13 Pro Max 6.7',
      image: 'https://img.shop.com/Image/290000/291200/291221/products/1924592060.jpg?plain&size=400x400',
      price: '1749.3',
      soldBy: 'Sold by Sahara Case'
    },
    {
      name: 'Techsmarter 2-in-1 Magnetic Apple Wireless Charger Pad Stand for Airpods and iPhone 12 & 13 ',
      image: 'https://img.shop.com/Image/290000/292100/292109/products/1934823073.jpg?plain&size=400x400',
      price: '2799.3',
      soldBy: 'Sold by Techsmarter'
    },
    {
      name: 'C001-CHAP Cherry & Apple - Cell Phone Charm Strap Camera Charm Strap & Handbags Charms ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1539736030.jpg?plain&size=400x400',
      price: '1749.3',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'ZeroDamage Apple iPhone 12 Pro Max (2020) Tempered Glass Screen Protector [2 Pack]/ ',
      image: 'https://img.shop.com/Image/290000/291200/291221/products/1924591398.jpg?plain&size=400x400',
      price: '1801.8',
      soldBy: 'Sold by Sahara Case'
    },
    {
      name: 'Apple iPhone 12 Pro 512GB, Blue (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937194847.jpg?plain&size=400x400',
      price: '55999.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 128GB, White (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937190056.jpg?plain&size=400x400',
      price: '21139.3',
      soldBy: 'Sold by Bmbrooks'
    },
    {
      name: 'Chargetech Cell Phone Charging Dock Ccd4. Includes 1 Apple Lightning Cable (ipho(1/ea) ',
      image: 'https://img.shop.com/Image/260000/262400/262457/products/1939523663.jpg?plain&size=400x400',
      price: '4954.6',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Monoprice 4-Port USB Car Charger | Up to 25W of Ch…d MacBook Pro Air Laptop, Samsung Galaxy S22 S21 ',
      image: 'https://img.shop.com/Image/260000/269900/269960/products/1935302077.jpg?plain&size=400x400',
      price: '591.5',
      soldBy: 'Sold by Monoprice'
    },
    {
      name: 'Apple iPhone 12 Pro 512GB, Graphite (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937195563.jpg?plain&size=400x400',
      price: '55999.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 64GB, Red (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937192914.jpg?plain&size=400x400',
      price: '30939.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'DreamWireless PLTETIP6SKBR Apple iPhone 6 - 4.7 in…ite Series Sheepskin - Brown Platinum Collection ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1333370008.jpg?plain&size=400x400',
      price: '1504.3',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 8 Plus 64GB, Space Gray (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937191619.jpg?plain&size=400x400',
      price: '14979.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 64GB, Black (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937193270.jpg?plain&size=400x400',
      price: '30939.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro 128GB, Blue (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186602.jpg?plain&size=400x400',
      price: '48929.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 256GB, White (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937188411.jpg?plain&size=400x400',
      price: '25129.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple Wireless Charging Case for AirPods ',
      image: 'https://img.shop.com/Image/240000/249900/249914/products/1927170729.jpg?plain&size=400x400',
      price: '4304.3',
      soldBy: 'Sold by Tech for Less'
    },
    {
      name: 'ArtsCase AC-00561597 Autumn Nature for Strong Fit Apple iPhone 11 Pro Max ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1834885846.jpg?plain&size=400x400',
      price: '2032.8',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 11 Pro 64GB, Green (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937187085.jpg?plain&size=400x400',
      price: '32969.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 11 Pro 64GB, Space Gray (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186629.jpg?plain&size=400x400',
      price: '32969.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 64GB, Blue (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937192916.jpg?plain&size=400x400',
      price: '30939.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro 256GB, Blue (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186052.jpg?plain&size=400x400',
      price: '52919.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 11 Pro 256GB, Space Gray (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937187144.jpg?plain&size=400x400',
      price: '38779.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple TSPIPX-3DF-WT iPhone X 3D Full Coverage Tempered Glass Screen Protector Arcing, White ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1734212097.jpg?plain&size=400x400',
      price: '1246.0',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple TSPIPX iPhone X Tempered Glass Screen Protector for 0.33 mm Arcing, Clear ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1734212092.jpg?plain&size=400x400',
      price: '1122.1',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 12 Pro 128GB, Gold (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186149.jpg?plain&size=400x400',
      price: '48929.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro 512GB, Silver (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937195556.jpg?plain&size=400x400',
      price: '55999.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 256GB, Yellow (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937188412.jpg?plain&size=400x400',
      price: '25129.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'ArtsCase AC-00571804 Warm Colors for Summer for Strong Fit Apple iPhone 11 Pro Max ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1834885854.jpg?plain&size=400x400',
      price: '2039.8',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 13 Pro 256GB, Graphite (Verizon) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937184886.jpg?plain&size=400x400',
      price: '69229.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro Max 512GB, Graphite (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189878.jpg?plain&size=400x400',
      price: '61949.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro Max 128GB, Graphite (Verizon) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189870.jpg?plain&size=400x400',
      price: '54389.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 128GB, Blue (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937190054.jpg?plain&size=400x400',
      price: '21139.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Monoprice USB & Lightning Cable - 0.35 Feet - Blac…X 8 8 Plus 7 7 Plus 6s 6 SE 5s, iPad, Pro, Air 2 ',
      image: 'https://img.shop.com/Image/260000/269900/269960/products/1890882343.jpg?plain&size=400x400',
      price: '892.5',
      soldBy: 'Sold by Monoprice'
    },
    {
      name: 'Apple iPhone 12 Pro 512GB, Gold (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937194848.jpg?plain&size=400x400',
      price: '55999.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Flags AIP6P-AMERICANEAGLE Apple iPhone 6 Plus Skin - American Eagle ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1520226446.jpg?plain&size=400x400',
      price: '1225.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 8 Plus 64GB, Silver (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189043.jpg?plain&size=400x400',
      price: '16379.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'ArtsCase AC-00571767 Curved Lines In Marble & Magenta for Strong Fit Apple iPhone 11 Pro Max ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937190589.jpg?plain&size=400x400',
      price: '52919.3',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 12 Pro 256GB, Graphite (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1834885849.jpg?plain&size=400x400',
      price: '2020.2',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone 12 Pro 256GB, Gold (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937186053.jpg?plain&size=400x400',
      price: '52919.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple CSIPX-DBC-RG iPhone X Diamond Belt Collectio…r Finish TPU Case Cover with Electroplated Frame ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1734235117.jpg?plain&size=400x400',
      price: '1205.4',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 12 64GB, White (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937193268.jpg?plain&size=400x400',
      price: '18759.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XS Max 64GB, Gold (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937191592.jpg?plain&size=400x400',
      price: '30939.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Robert Steven Connett AIP7-C-PODS Apple iPhone 7 Skin - C-Pods ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1520228826.jpg?plain&size=400x400',
      price: '1225.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 11 Pro Max 64GB, Green (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937192846.jpg?plain&size=400x400',
      price: '34579.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XR 64GB, White (Unlocked) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937185561.jpg?plain&size=400x400',
      price: '19529.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Vlad Studio AIP7-ALIENCHAMELEON Apple iPhone 7 Skin - Alien & Chameleon ',
      image: 'https://img.shop.com/Image/250000/251800/251872/products/1520226154.jpg?plain&size=400x400',
      price: '1225.7',
      soldBy: 'Sold by UnbeatableSale'
    },
    {
      name: 'Apple iPhone 12 Pro Max 128GB, Blue (Verizon) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937189869.jpg?plain&size=400x400',
      price: '54389.3',
      soldBy: 'Sold by GameStop'
    },
    {
      name: 'Apple iPhone XS Max 64GB, Space Gray (AT & T) - GameStop ',
      image: 'https://img.shop.com/Image/250000/250900/250986/products/1937191593.jpg?plain&size=400x400',
      price: '18759.3',
      soldBy: 'Sold by GameStop'
    }
  ]

document.querySelector("#shopByPrice").addEventListener("change", sortPrice)
function sortPrice() {
    let sortValue = document.querySelector("#shopByPrice").value
    if (sortValue != "") {
        if (sortValue == "hightolow") {
            shop.sort(function (a, b) {
                if (+(a.price) > +(b.price)) return -1
                if (+(a.price) < +(b.price)) return 1
                return 0
            })
        }
        if (sortValue == "lowtohigh") {
            shop.sort(function (a, b) {
                if (+(a.price) > +(b.price)) return 1
                if (+(a.price) < +(b.price)) return -1
                return 0
            })
        }
        loadProducts(shop)
    }
}


document.querySelector("#shopByName").addEventListener("click", sortName)
function sortName() {
    let sortValue = document.querySelector("#shopByName").value
    if (sortValue != "Sort By Name") {
        if (sortValue == "ascending") {
            shop.sort(function (a, b) {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                return 0
            })
        }
        if (sortValue == "decending") {
            shop.sort(function (a, b) {
                if (a.name > b.name) return -1
                if (a.name < b.name) return 1
                return 0
            })
        }
        loadProducts(shop)
    }
}


let cart = JSON.parse(localStorage.getItem('cart')) || []
function loadProducts(shop) {
    document.querySelector(".shopPage").innerHTML = ""
    shop.forEach((product) => {
        let div = document.createElement('div')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let label1 = document.createElement('label')
        let h2 = document.createElement('h2')
        let label2 = document.createElement('label')
        let button = document.createElement('button')
        div.setAttribute("class", 'itemProduct')
        img.src = product.image
        p.innerText = product.name
        label1.innerText = product.soldBy
        h2.innerText = "₹" + product.price
        button.innerText = "Add To Cart"
        button.addEventListener('click', () => {
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))
            document.querySelector(".alert").setAttribute("class", "alert cong");
            document.querySelector(".cong").innerText = product.name + " Added To Cart"
            $('html, body').animate({ scrollTop: 0 }, '300');
        })
        div.append(img, p, label1, h2, label2, button)
        document.querySelector(".shopPage").append(div)
    })
}
loadProducts(shop)

