import { Product } from './Product';

export default class ShoppingCart {
  // Our shopping cart
  cart: Product[] = [];

  // Add a new product to the cart
  add(product: Product): void {
    this.cart.push(product);
  }

  // Get cart total
  total(): number {
    let sum: number = 0;
    this.cart.map((product) => {
      sum += product.price * product.qty;
    });
    return sum;
  }

  // Get cart total calories
  calories(): number {
    let sum: number = 0;
    this.cart.map((product) => {
      if (product.nutrition) {
        sum += product.nutrition.calories * product.qty;
      }
    });
    return sum;
  }
}
