let cartItems = [];
let totalSum = 0;

const productDetails = [
  { name: "Product 1", price: 10, image: "product.jpeg" },
  { name: "Product 2", price: 15, image: "product1.jpg" }
  // Add more product details here
];

const productContainer = document.getElementById("product-list");

productDetails.forEach((product, index) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name} Image" />
    <p class="price">$${product.price}</p>
    <button class="add-to-cart">Add to Cart</button>
  `;
  productContainer.appendChild(productDiv);

  const addToCartButtons = productContainer.querySelectorAll(".add-to-cart");
  addToCartButtons[index].addEventListener("click", () => {
    cartItems.push({
      name: product.name,
      price: product.price,
      image: product.image
    });

    totalSum += product.price;

    updateCart();
  });
});

function updateCart() {
  const cartList = document.getElementById("cart-items");
  const totalElem = document.getElementById("total-price");

  cartList.innerHTML = "";

  cartItems.forEach((item) => {
    const li = document.createElement("li");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;
    img.style.width = "50px";
    li.appendChild(img);

    const details = document.createElement("span");
    details.textContent = item.name + " - $" + item.price;
    li.appendChild(details);

    cartList.appendChild(li);
  });

  totalElem.textContent = "$" + totalSum;
}
