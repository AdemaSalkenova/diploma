//корзина
"use client";
import { useState } from "react";

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Naomi Mini Wallet",
      color: "Cotton Candy",
      price: 187,
      qty: 1,
      image: "/image 4.png", 
    },
    {
      id: 2,
      name: "Brick",
      color: "Cashmere Rose",
      price: 187,
      qty: 1,
      image: "/f1.png",
    },
    {
      id: 3,
      name: "Business Bag",
      color: "Black and Grey",
      price: 187,
      qty: 1,
      image: "/f12.png",
    },
  ]);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const updateQty = (id, delta) => {
    setItems(
      items.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div
      style={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "22px", marginBottom: "30px" }}>Your cart</h1>

     
      <div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid #eee",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", objectFit: "cover" }}
              />
              <div>
                <p style={{ fontWeight: "bold" }}>{item.name}</p>
                <p style={{ fontSize: "13px", color: "#777" }}>
                  Color: {item.color}
                </p>
              </div>
            </div>

            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => updateQty(item.id, -1)} style={btnQty}>
                −
              </button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, +1)} style={btnQty}>
                +
              </button>
            </div>

            <p>${item.price * item.qty}.00</p>

            
            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#999",
              }}
            >
              🗑
            </button>
          </div>
        ))}
      </div>

     
      <div style={{ marginTop: "40px", textAlign: "right" }}>
        <p style={{ marginBottom: "10px" }}>
          Subtotal: <strong>${subtotal}.00 CAD</strong>
        </p>
        <button
          style={{
            background: "#000",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Checkout
        </button>
      </div>

      
      <div style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "20px" }}>
          You may also like
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          <RecItem name="Hobo Small" price={195} image="/image 3.png" />
          <RecItem name="Bo Soft Strap" price={365} image="/image 4.png" />
          <RecItem name="Hobo Large" price={615} image="/image 5.png" />
          <RecItem name="Stormi" price={195} image="/image 6.png" />
          <RecItem name="Hobo Small" price={195} image="/image 7.png" />
          <RecItem name="Stormi" price={195} image="/image 8.png" />
          <RecItem name="Bo Soft Strap" price={365} image="/image 9.png" />
          <RecItem name="Hobo Large" price={615} image="/image 10.png" />
        </div>
      </div>
    </div>
  );
}

const btnQty = {
  width: "28px",
  height: "28px",
  border: "1px solid #ddd",
  background: "none",
  cursor: "pointer",
};

function RecItem({ name, price, image }) {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <p style={{ fontSize: "14px" }}>{name}</p>
      <p style={{ fontSize: "13px", color: "#777" }}>${price}.00 CAD</p>
    </div>
  );
}
