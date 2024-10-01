let disCat = () => {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo")) || [];
    let tr = '';
    let total = 0;
    cartdata.forEach((j, index) => {
        tr += `
        <tr class="table-body-row">
            <td class="product-remove" onclick="deleteItem(${index})"><a href="#"><i class="far fa-window-close"></i></a></td>
            <td class="product-image"><img src="${j.image}" alt=""></td>
            <td class="product-name">${j.prname}</td>
            <td class="product-price">$${j.price}</td>
            <td class="product-quantity"><input type="number" value="${j.qty}" id="quantity-${index}" min="1"></td>
            <td class="product-total">${j.total}</td>
        </tr>`;
        total += j.total;
    });


    document.getElementById("cartid").innerHTML = tr;

    let tt = `
    <a href="cart.html" onclick="updatecart()" class="boxed-btn">Update Cart</a>
    <a href="checkout.html" class="boxed-btn black">Check Out</a>`;

    document.getElementById("total").innerText = total;
    document.getElementById("update").innerHTML = tt;
}

function updatecart() {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo")) || [];
    deta = cartdata.forEach((item, index) => {
        let newQuantity = document.getElementById(`quantity-${index}`).value;
        cartdata[index].qty = parseInt(newQuantity);
        cartdata[index].total = parseInt(newQuantity) * item.price;
    });
    localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
    alert(`updatecart successfully`);

    disCat(); // Update the displayed cart after updating quantities
}
function deleteItem(index) {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo")) || [];
   cartdata.splice(index,1); // Remove the item from the array
    localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
    alert(`delete cart successfully `)
    disCat(); // Update the displayed cart after deletion
    
}

disCat();
