export interface Product {
  name: string;
  price: number;
  qty: number;
  onSale?: boolean;
  discounts?: string[];
  type?: ProductType;
  nutrition?: Nutrition;
}

export interface Nutrition {
  calories: number;
  isFrozen: boolean;
  [index: string]: any;
}

export enum ProductType {
  Vegetable,
  Dessert,
  Fruit,
  Poultry,
  Fish,
  Beef,
  Pork,
}
