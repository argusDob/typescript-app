export type Product = {
  id: string;
  title: string;
  category: string;
  sku:string;
  price: number;
  quantity:number
};
export type Address = { street: string; city: string; zip: string };

export type Order = {
  [x: string]: any;
  id: string;
  address: Address;
  productIds: string[];
  products?: Product[];
};
