let shop = document.querySelector('.shop')

let item = [
    {
        id: "jfhgbvnscs",
        name: "T-Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./img/img 1.avif",
    },
    {
        id: "ioytrhndcv",
        name: "Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./img/img 2.jpg",
    },
    {
        id: "wuefbncxbsn",
        name: "Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./img/img 3.jpg",
    },
    {
        id: "thyfhcbcv",
        name: "Hoddie",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./img/img 4.jpg",
    },
]

let ShopData = JSON.parse(localStorage.getItem('cartItem')) || []

let genrateShop = () => {
    (shop.innerHTML = item.map((item, idx) => {
        // let search = ShopData.find((x) => x.id === item.id) || [];
        return `<div class="item" id=product-id-${item.id}>
                <img src='${item.img}' alt="">
                <div class="details">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <div class="price-quantity">
                        <h2>$${item.price}</h2>
                        <div class="button">
                            <i class="fa-solid fa-minus" onclick= "removeCart(${item.id})"></i>
                            <div id=${item.id} class="quantity">0</div>
                            <i class="fa-solid fa-plus" onclick= "addCart(${item.id})"></i>
                        </div>
                    </div>
                </div>
            </div>`
    }).join(""))
}

genrateShop()

let quantity = document.querySelector('.quantity')

function addCart(id) {
    let selectedId = id
    // console.log(selectedId)
    let search = ShopData.find((x) => x.id === selectedId.id)
    if (search === undefined) {
        ShopData.push({
            id: selectedId.id,
            item: 1,
        })
    } else {
        search.item += 1
    }
    quantityUpadte(selectedId.id)
    localStorage.setItem("cartItem", JSON.stringify(ShopData))
}

function removeCart(id) {
    let selectedId = id
    let search = ShopData.find((x) => x.id === selectedId.id)
    if (search.item === 0) {
        return
    } else if (search === undefined) {
        return
    } else {
        search.item -= 1
    }
    quantityUpadte(selectedId.id)
    localStorage.setItem("cartItem", JSON.stringify(ShopData))
}

function quantityUpadte(id) {
    let search = ShopData.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    totalCalculation()
}

function totalCalculation() {
    let totalAmout = document.getElementById('cartAmount')
    totalAmout.innerHTML = ShopData.map((x) => x.item).reduce((x, y) => x + y, 0);
}

totalCalculation()

