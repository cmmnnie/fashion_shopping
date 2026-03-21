import React from "react";

function CartItem({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "500px",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        width="120"
        height="120"
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />
      <div>
        <h3>{item.name}</h3>
        <p>가격: {item.price.toLocaleString()}원</p>
        <p>수량: {item.quantity}개</p>
      </div>
    </div>
  );
}

export default CartItem;