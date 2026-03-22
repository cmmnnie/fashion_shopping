import React from "react";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        width="120"
        height="120"
        style={{ objectFit: "cover", borderRadius: "8px" }}
      />

      <div style={{ flex: 1 }}>
        <h3>{item.name}</h3>
        <p>가격: {item.price.toLocaleString()}원</p>
        <p>수량: {item.quantity}개</p>
        <p>상품 금액: {(item.price * item.quantity).toLocaleString()}원</p>

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <button onClick={() => onDecrease(item.id)}>-</button>
          <button onClick={() => onIncrease(item.id)}>+</button>
          <button onClick={() => onRemove(item.id)}>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;