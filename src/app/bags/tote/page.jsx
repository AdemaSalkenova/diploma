//верска bags
"use client";
import { useState } from "react";

export default function ToteBagsPage() {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [priceRange, setPriceRange] = useState({ from: "", to: "" });

  const toggleFilter = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  const toggleAvailability = (value) => {
    setSelectedAvailability((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const resetFilter = (type) => {
    if (type === "availability") setSelectedAvailability([]);
    if (type === "color") setSelectedColors([]);
    if (type === "price") setPriceRange({ from: "", to: "" });
  };

  const colorsList = [
    "Butter",
    "Chocolate",
    "Demin",
    "Dry Rose",
    "Emerald",
    "Latte",
    "Milky",
    "Oceania",
    "Off White",
    "Olive Leaf",
    "Pastel",
    "Pink Cloud",
  ];

  const colorCounts = {
    Butter: 2,
    Chocolate: 2,
    Demin: 2,
    "Dry Rose": 1,
    Emerald: 1,
    Latte: 1,
    Milky: 1,
    Oceania: 1,
    "Off White": 1,
    "Olive Leaf": 1,
    Pastel: 1,
    "Pink Cloud": 1,
  };

  const maxPrice = 615;

  const products = [
    { id: 1, name: "Hobo Small", price: 195, color: "Butter", image: "/image 3.png" },
    { id: 2, name: "Bo Soft Strap", price: 365, color: "Pink Cloud", image: "/image 4.png" },
    { id: 3, name: "Hobo Large", price: 615, color: "Oceania", image: "/image 5.png" },
    { id: 4, name: "Storm", price: 195, color: "Emerald", image: "/image 6.png", sale: true },
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "20px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
        Tote Bags
      </h2>

      <div style={{ display: "flex", gap: "20px", marginBottom: "20px", alignItems: "center" }}>
        <span style={{ fontWeight: "bold" }}>Filter:</span>
        <button onClick={() => toggleFilter("availability")}>Availability ▾</button>
        <button onClick={() => toggleFilter("price")}>Price ▾</button>
        <button onClick={() => toggleFilter("color")}>Color ▾</button>

        <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
          <span>Sort by: Best selling ▾</span>
          <span>{products.length} products </span>
        </div>
      </div>

      
      {openFilter === "availability" && (
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold" }}>{selectedAvailability.length} 1 selected</p>
          <button onClick={() => resetFilter("availability")}>Reset</button>
          <div>
            <label>
              <input
                type="checkbox"
                checked={selectedAvailability.includes("in")}
                onChange={() => toggleAvailability("in")}
              />{" "}
              In stock (6)
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={selectedAvailability.includes("out")}
                onChange={() => toggleAvailability("out")}
              />{" "}
              Out of stock (1)
            </label>
          </div>
        </div>
      )}

      
      {openFilter === "price" && (
        <div style={{ marginBottom: "20px" }}>
          <p style={{ fontWeight: "bold" }}>The highest price is ${maxPrice}.00</p>
          <button onClick={() => resetFilter("price")}>Reset</button>
          <div>
            <input
              type="number"
              placeholder="From"
              value={priceRange.from}
              onChange={(e) => setPriceRange({ ...priceRange, from: e.target.value })}
              style={{ width: "100px", marginRight: "5px" }}
            />
            <input
              type="number"
              placeholder="To"
              value={priceRange.to}
              onChange={(e) => setPriceRange({ ...priceRange, to: e.target.value })}
              style={{ width: "100px" }}
            />
          </div>
        </div>
      )}

      
      {openFilter === "color" && (
        <div style={{ marginBottom: "20px" }}>
          <button onClick={() => resetFilter("color")}>Reset</button>
          {colorsList.map((color) => (
            <div key={color}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color)}
                  onChange={() => toggleColor(color)}
                />{" "}
                {color} ({colorCounts[color] || 1})
              </label>
            </div>
          ))}
        </div>
      )}

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />
            <h3 style={{ margin: "10px 0" }}>{p.name}</h3>
            {p.sale && (
              <span style={{ color: "red", fontWeight: "bold", marginRight: "10px" }}>
                Sale
              </span>
            )}
            <p>${p.price}.00 CAD</p>
          </div>
        ))}
      </div>
    </div>
  );
}
