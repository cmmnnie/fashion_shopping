import React, { useState } from "react";
import CartItem from "./components/CartItem";

function App() {
  const [item, setItem] = useState({
    id: 1,
    name: "나이키 에어맥스",
    price: 129000,
    quantity: 1,
  });

  const handleIncrease = (id) => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity + 1,
    }));
  };

  const handleDecrease = (id) => {
    setItem((prev) => ({
      ...prev,
      quantity: prev.quantity > 1 ? prev.quantity - 1 : 1,
    }));
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>장바구니</h1>
      <CartItem
        item={item}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

export default App;