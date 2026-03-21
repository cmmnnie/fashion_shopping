import React, { useMemo } from "react";

function CartItem({ item, onIncrease, onDecrease }) {
  const totalPrice = useMemo(() => {
    return item.price * item.quantity;
  }, [item.price, item.quantity]);

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", marginBottom: "16px" }}>
      <h3>{item.name}</h3>
      <p>{item.price.toLocaleString()}원</p>

      <div>
        <button onClick={() => onDecrease(item.id)}>-</button>
        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
        <button onClick={() => onIncrease(item.id)}>+</button>
      </div>

      <p>총 금액: {totalPrice.toLocaleString()}원</p>
    </div>
  );
}

export default React.memo(CartItem);