import React from "react";
import CartItem from "./CartItem";

function CartList({ items, onIncrease, onDecrease, onRemove }) {
  if (items.length === 0) {
    return <p>장바구니에 담긴 상품이 없습니다.</p>;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default CartList;