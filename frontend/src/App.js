import React, { useState } from "react";
import CartList from "./components/CartList";

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

  const handleRemove = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const productsTotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = productsTotal >= 100000 || productsTotal === 0 ? 0 : 3000;
  const finalTotal = productsTotal + shippingFee;

  const handleCheckout = () => {
    alert("결제 모듈이 연결될 예정입니다.");
  };

  return (
    <div style={{ padding: "24px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>장바구니</h1>

      <CartList
        items={items}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onRemove={handleRemove}
      />

      <div
        style={{
          marginTop: "24px",
          padding: "16px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h2>결제 금액</h2>
        <p>상품 총액: {productsTotal.toLocaleString()}원</p>
        <p>배송비: {shippingFee.toLocaleString()}원</p>
        <p>
          <strong>최종 결제 금액: {finalTotal.toLocaleString()}원</strong>
        </p>

        <button
          onClick={handleCheckout}
          disabled={items.length === 0}
          style={{
            marginTop: "12px",
            padding: "10px 16px",
            cursor: items.length === 0 ? "not-allowed" : "pointer",
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}

export default App;