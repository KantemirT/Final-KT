let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  alert(`Товар "${name}" за $${price} добавлен в корзину!`);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
    total += item.price;
  });

  totalPrice.textContent = total;
}



// Получаем элементы
const sidebar = document.getElementById('sidebar');
const toggleMenuBtn = document.getElementById('toggle-menu-btn');
const menu = document.querySelector('.menu');

// Переключение меню
toggleMenuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  menu.classList.toggle('active');
});
