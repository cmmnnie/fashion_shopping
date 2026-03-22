import React, { useState } from "react";
import CartItem from "./components/CartItem";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "나이키 에어맥스",
      price: 129000,
      quantity: 2,
      image: "https://via.placeholder.com/120",
    },
    {
      id: 2,
      name: "아디다스 슈퍼스타",
      price: 99000,
      quantity: 1,
      image: "https://via.placeholder.com/120",
    },
  ]);

  const handleIncrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "24px" }}>
      <h1>장바구니</h1>

      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}

      <h2>총 금액: {totalPrice.toLocaleString()}원</h2>
    </div>
  );
}

export default App;