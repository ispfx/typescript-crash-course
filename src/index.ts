interface Product {
  name: string;
  price: number;
  qty: number;
  onSale?: boolean;
  discounts?: string[];
  nutrition?: Nutrition;
}

interface Nutrition {
  calories: number;
  [index: string]: any;
}

// Our shopping cart
const cart: Product[] = [];

// Add a new product to the cart
function add(product: Product): void {
  cart.push(product);
}

// Get cart total
function total(): number {
  let sum: number = 0;
  cart.map((product) => {
    sum += product.price * product.qty;
  });
  return sum;
}

// Get cart total calories
function calories(): number {
  let sum: number = 0;
  cart.map((product) => {
    if (product.nutrition) {
      sum += product.nutrition.calories * product.qty;
    }
  });
  return sum;
}

// Add products to cart
add({
  name: 'Apples',
  price: 149,
  qty: 5,
  nutrition: {
    calories: 140,
  },
});
add({
  name: 'Oranges',
  price: 299,
  qty: 3,
  nutrition: {
    calories: 160,
    vitaminC: 14,
    vitaminD: 15,
  },
});
add({
  name: 'Bananas',
  price: 99,
  qty: 3,
});
add({
  name: 'Chicken',
  price: 599,
  qty: 2,
  onSale: true,
  discounts: [ '20% off', 'Coupon' ],
});

// Get cart total
const cartTotal = total();
