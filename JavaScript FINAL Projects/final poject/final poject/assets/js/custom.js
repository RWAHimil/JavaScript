let disData = JSON.parse(localStorage.getItem('catInfo'));
let catList = JSON.parse(localStorage.getItem('productInfo'));

let tr = `<li class="active" data-filter="*">All</li>`

disData.map((i) => {

    tr += `<li data-filter=".${i.name}">${i.name}</li>`
})

document.getElementById("name").innerHTML = tr

td = ''

disData.map((i) => {
    catList.filter((j) => {
        if (i.id == j.cid) {
            td += `<div class="col-lg-4 col-md-6 text-center ${i.name}">
            <div class="single-product-item">
                <div class="product-image">
                    <a href="single-product.html"><img src="${j.image}" onclick= alt=""></a>
                </div>
                <h3>${j.prname}</h3>
                <p class="product-price"><span>Per Kg</span> ${j.price}$ </p>
                <a href="#" class="cart-btn"  onclick="addToCart(${i.id})"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
            </div>
        </div>`

        }
    })
})

document.getElementById('cname').innerHTML = td
//insert

let cart = [];
const addToCart = (id) => {
    console.log(id)
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    let obj = {};
    let image = "";
    let prname = "";
    let price = "";


    catList.filter((i) => {
        if (i.id == id) {
            image = i.image;
            price = i.price;
            prname = i.prname;
        }
    });

    if (cartdata != null) {

        let ans = cartdata.filter((i) => {
            return i.id == id;
        });

        if (ans.length > 0) {
            cartdata.map((i) => {
                if (i.id == id) {
                    i.qty = parseInt(i.qty) + 1,
                        i.total = i.total + i.price;

                }
            })

        } else {
            console.log("else part");
            obj = {
                category: cartdata.length + 1,
                id: id,
                image: image,
                prname: prname,
                price: parseInt(price),
                qty: 1,
                total: parseInt(price)
            }
            
            cartdata.push(obj);
        }
        localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
        alert(`${prname} cart added successfully`);

    } else {
        obj = {
            category: 1,
            id: id,
            image: image,
            prname: prname,
            price:parseInt (price),
            qty: 1,
            total: parseInt(price)
        }
        cart.push(obj);
        localStorage.setItem("addToCartInfo", JSON.stringify(cart));
        alert(`${prname} cart added successfully`);
    }
        

    disCat()
}