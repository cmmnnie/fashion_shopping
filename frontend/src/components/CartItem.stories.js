import React from "react";
import CartItem from "./CartItem";

const meta = {
  title: "Components/CartItem",
  component: CartItem,
};

export default meta;

export const Default = {
  args: {
    item: {
      id: 1,
      name: "나이키 에어맥스",
      price: 129000,
      quantity: 2,
      image: "https://via.placeholder.com/120",
    },
    onIncrease: () => {},
    onDecrease: () => {},
    onRemove: () => {},
  },
};