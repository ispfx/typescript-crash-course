interface Product {
  name: string;
  price: number;
  qty: number;
  onSale?: boolean;
  discounts?: string[];
  type?: ProductType;
  nutrition?: Nutrition;
}

interface Nutrition {
  calories: number;
  isFrozen: boolean;
  [index: string]: any;
}

enum ProductType {
  Vegetable,
  Dessert,
  Fruit,
  Poultry,
  Fish,
  Beef,
  Pork,
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
  type: ProductType.Fruit,
  nutrition: {
    calories: 140,
    isFrozen: false,
    vitaminC: 14,
  },
});
add({
  name: 'Oranges',
  price: 299,
  qty: 3,
  type: ProductType.Fruit,
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
  type: ProductType.Poultry,
  nutrition: {
    calories: 250,
    isFrozen: true,
  },
});

// Get cart total
const cartTotal = total();
