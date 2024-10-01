let shoppingCart = document.querySelector('.shopping-cart')
let label = document.getElementById("label");

let ShopData = JSON.parse(localStorage.getItem('cartItem')) || []

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

function totalCalculation() {
    let totalAmout = document.getElementById('cartAmount')
    totalAmout.innerHTML = ShopData.map((x) => x.item).reduce((x, y) => x + y, 0);
}

totalCalculation()

function cartDisplay() {
    if (ShopData.length !== 0) {
        shoppingCart.innerHTML = ShopData.map((x) => {
            let search = item.find((y) => y.id === x.id) || []
            // console.log(item.find((y)=>y.id === x.id))
            return `<div class="cart-item">
            <img width="100" src="${search.img}" alt="" />
            <div class="details">
    
              <div class="title-price-x">
                  <h4 class="title-price">
                    <p>${search.name}</p>
                    <p class="cart-item-price">$ ${search.price}</p>
                  </h4>
                  <i onclick="removeItem(${search.id})" class= "bi bi-x-lg fa-solid fa-xmark"></i>
              </div>
    
              <div class="buttons">
                  <i onclick="decrement(${search.id})" class="fa-solid fa-minus bi bi-dash-lg"></i>
                  <div id=${search.id} class="quantity">${x.item}</div>
                  <i onclick="increment(${search.id})" class="fa-solid fa-plus bi bi-plus-lg"></i>
              </div>
    
              <h3>$ ${x.item * search.price}</h3>
            </div>
          </div>`
        }).join("")
    } else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `<h2>Cart is Empty</h2>
        <a href="index.html">
          <button class="HomeBtn">Back to home</button>
        </a>
        `;
    }

}

cartDisplay()


function increment(id) {
    let selectedId = id
    let search = ShopData.find((x) => x.id === selectedId.id)

    if (search === undefined) {
        ShopData.push({
            id: selectedId.id,
            item: 1,
        })
    } else {
        search.item += 1
    }
    cartDisplay()
    updateCartItem(selectedId.id)
    localStorage.setItem("cartItem", JSON.stringify(ShopData))
}

function decrement(id) {
    let selectedId = id
    let search = ShopData.find((x) => x.id === selectedId.id)

    if (search === undefined) return
    else if (search.item === 0) return
    else {
        search.item -= 1
    }
    updateCartItem(selectedId.id)
    ShopData = ShopData.filter((x) => x.item !== 0)
    cartDisplay()
    localStorage.setItem("cartItem", JSON.stringify(ShopData))
}

function updateCartItem(id) {
    let search = ShopData.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
}

function removeItem(id) {
    let selectedId = id
    ShopData = ShopData.filter((x) => x.id !== selectedId.id);
    cartDisplay()
    localStorage.setItem("cartItem", JSON.stringify(ShopData))
}

const totalAmout_Main = document.querySelector('.total-amount-main span')

function TotalBillGen() {
    let total = ShopData.map((CartProd) => {
        let search = item.find((prod) => prod.id === CartProd.id)

        return CartProd.item * prod.price
    })
    console.log(total)
}

TotalBillGen()