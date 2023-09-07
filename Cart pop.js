document.addEventListener("DOMContentLoaded", function () {
    const cartPopup = document.getElementById("cart-popup");
    const cartIcon = document.querySelector(".cart-icon");
    const closeCartPopupButton = document.getElementById("close-cart-popup");

    // Simulated cart data
    const cartData = [
        { name: "Product 1", quantity: 2, price: 100 },
        { name: "Product 2", quantity: 1, price: 50 },
    ];

    cartIcon.addEventListener("click", function () {
        // Populate the cart pop-up with cart data
        const cartPopupItems = document.getElementById("cart-popup-items");
        const cartPopupTotal = document.getElementById("cart-popup-total");
        
        cartPopupItems.innerHTML = ""; // Clear previous content

        let total = 0;

        cartData.forEach(item => {
            const itemElement = document.createElement("li");
            itemElement.textContent = `${item.name} x${item.quantity} - ₱${item.price * item.quantity}`;
            cartPopupItems.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        cartPopupTotal.textContent = `₱${total}`;
        
        cartPopup.style.right = "0"; // Show the cart pop-up
    });

    closeCartPopupButton.addEventListener("click", function () {
        cartPopup.style.right = "-400px"; // Hide the cart pop-up
    });
});
