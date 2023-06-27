import { Order, Product } from "@/types";

export const ORDER_LIST: Order[] = [
  {
    id: "123",
    address: { street: "Street 1 ", city: "City 1", zip: "10001" },
    productIds: ["P1", "P2"],
  },
  {
    id: "124",
    address: { street: "Street 2 ", city: "City 2", zip: "10002" },
    productIds: ["P3", "P4"],
  },
  {
    id: "125",
    address: { street: "Street 3 ", city: "City 3", zip: "10003" },
    productIds: ["P5"],
  },
  {
    id: "126",
    address: { street: "Street 4 ", city: "City 4", zip: "10004" },
    productIds: ["P1", "P3", "P2", "P4"],
  },
  {
    id: "127",
    address: { street: "Street 5 ", city: "City 5", zip: "10005" },
    productIds: ["P2", "P4"],
  },
];

export const PRODUCT_LIST: Product[] = [
  {
    id: "P1",
    title: "Product 1",
    sku: "12345",
    category: "Category 1",
    quantity:1,
    price: 100,
  },
  {
    id: "P2",
    title: "Product 2",
    sku: "12345",
    category: "Category 2",
    quantity:11,
    price: 200,
  },
  {
    id: "P3",
    title: "Product 3",
    sku: "12345",
    category: "Category 3",
    quantity:132,
    price: 300,
  },
  {
    id: "P4",
    title: "Product 4",
    sku: "12345",
    category: "Category 4",
    quantity:154,
    price: 400,
  },
  {
    id: "P5",
    title: "Product 5",
    sku: "12345",
    category: "Category 5",
    quantity:1,
    price: 500,
  },
];
