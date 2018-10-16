import { ProductType } from './Product';
import ShoppingCart from './ShoppingCart';

// Create new shopping cart
const cart = new ShoppingCart();

// Add products to cart
cart.add({
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
cart.add({
  name: 'Oranges',
  price: 299,
  qty: 3,
  type: ProductType.Fruit,
});
cart.add({
  name: 'Bananas',
  price: 99,
  qty: 3,
});
cart.add({
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
const cartTotal = cart.total();
