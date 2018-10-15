// Our shopping cart
var cart = [];

// Add a new product to the cart
function add(name, price, qty) {
  cart.push({
    name: name,
    price: price,
    qty: qty,
  });
}

// Get cart total
function total() {
  var sum = 0;
  for (var i = 0; i < cart.length; i++) {
    sum += cart[i].price * cart[i].qty;
  }
  return sum;
}

// Add products to cart
add('Apples', 149, 5);
add('Oranges', 299, 3);

// Get cart total
var cartTotal = total();
