import CartItem from "./components/CartItem";

function App() {
  const item = {
    name: "나이키 에어맥스",
    price: 129000,
    quantity: 2,
    image: "https://via.placeholder.com/120",
  };

  return (
    <div style={{ padding: "24px" }}>
      <h1>장바구니 상품</h1>
      <CartItem item={item} />
    </div>
  );
}

export default App;