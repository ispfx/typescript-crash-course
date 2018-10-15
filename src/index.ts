// Our shopping cart
const cart = [];

// Add a new product to the cart
function add(name: string, price: number, qty: number): void {
  cart.push({ name, price, qty });
}

// Get cart total
function total(): number {
  let sum: number = 0;
  cart.map((product) => {
    sum += product.price * product.qty;
  });
  return sum;
}

// Add products to cart
add('Apples', 149, 5);
add('Oranges', 299, 3);
add('Bananas', 99, 3);
add('Chicken', 599, 2);

// Get cart total
const cartTotal = total();
