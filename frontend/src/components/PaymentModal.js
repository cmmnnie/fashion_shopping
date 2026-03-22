import React from "react";

function PaymentModal({
  isOpen,
  onClose,
  productsTotal,
  shippingFee,
  finalTotal,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "24px",
          borderRadius: "12px",
          width: "400px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2>결제 모달</h2>
        <p>상품 총액: {productsTotal.toLocaleString()}원</p>
        <p>배송비: {shippingFee.toLocaleString()}원</p>
        <p>
          <strong>최종 결제 금액: {finalTotal.toLocaleString()}원</strong>
        </p>

        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <button onClick={onClose}>닫기</button>
          <button
            onClick={() => {
              alert("결제가 완료되었습니다.");
              onClose();
            }}
          >
            결제 완료
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;