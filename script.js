const prices = {
    necklace: 100,
    earrings: 80,
    bracelet: 60
};

let cart = {};

function showCategory(type) {
    const section = document.getElementById("products");
    section.className = type;
    section.innerHTML = `<h2>${type.toUpperCase()}</h2><div class="grid"></div>`;
    section.classList.remove("hidden");

    const grid = section.querySelector(".grid");

    for (let i = 1; i <= 10; i++) {
        const model =
            type === "necklace" ? `N${i}` :
            type === "earrings" ? `E${i}` : `B${i}`;

        grid.innerHTML += `
            <div class="card">
                <h3>${model}</h3>
                <p>Price: $${prices[type]}</p>
                <div class="qty">
                    <button onclick="updateQty('${model}', -1)">−</button>
                    <span id="${model}">0</span>
                    <button onclick="updateQty('${model}', 1)">+</button>
                </div>
            </div>
        `;
    }
}

function updateQty(model, change) {
    cart[model] = (cart[model] || 0) + change;
    if (cart[model] < 0) cart[model] = 0;

    document.getElementById(model).innerText = cart[model];
    updateCart();
}

function updateCart() {
    const cartBox = document.getElementById("cart-items");
    cartBox.innerHTML = "";

    let total = 0;

    for (let item in cart) {
        if (cart[item] > 0) {
            let price = item.startsWith("N") ? 100 :
                        item.startsWith("E") ? 80 : 60;

            let itemTotal = price * cart[item];
            total += itemTotal;

            cartBox.innerHTML += `
                <p>${item} — ${cart[item]} × $${price} = $${itemTotal}</p>
            `;
        }
    }

    if (total === 0) {
        cartBox.innerHTML = "<p>No items</p>";
    } else {
        cartBox.innerHTML += `<hr><strong>Total: $${total}</strong>`;
    }
}
