//lookbook
"use client";

import Link from "next/link";

export default function LookbookPage() {
  const images = [
    "/l1.png", "/l2.png", "/l3.png", "/l4.png", "/l5.png", "/l6.png",
    "/l7.png", "/l8.png", "/l9.png", "/l10.png", "/l11.png",
  ];

  const products = [
    { id: 1, name: "Hobo Small", price: "$195.00 CAD", image: "/image 3.png" },
    { id: 2, name: "Bo Soft Strap", price: "$365.00 CAD", image: "/image 4.png" },
    { id: 3, name: "Hobo Large", price: "$615.00 CAD", image: "/image 5.png" },
    { id: 4, name: "StormI", price: "$195.00 CAD", oldPrice: "$545.00 CAD", image: "/image 6.png", sale: true },
    { id: 5, name: "Hobo Small", price: "$195.00 CAD", image: "/image 7.png" },
    { id: 6, name: "StormI", price: "$195.00 CAD", oldPrice: "$545.00 CAD", image: "/image 8.png", sale: true },
    { id: 7, name: "Bo Soft Strap", price: "$365.00 CAD", image: "/image 9.png" },
    { id: 8, name: "Hobo Large", price: "$615.00 CAD", image: "/image 10.png" },
  ];

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      
      <h1 style={{ textAlign: "center", margin: "40px 0", fontSize: "20px", fontWeight: "400", letterSpacing: "0.5px" }}>
        Summer inspiration
      </h1>

      
      <div
        style={{
          columnCount: 2,
          columnGap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 20px 60px",
        }}
      >
        {images.map((src, i) =>
          src === "/l10.png" ? (
            <Link key={i} href="/brick">
              <img
                src={src}
                alt={`Lookbook ${i + 1}`}
                style={{
                  width: "100%",
                  marginBottom: "20px",
                  borderRadius: "6px",
                  display: "block",
                  cursor: "pointer",
                }}
              />
            </Link>
          ) : (
            <img
              key={i}
              src={src}
              alt={`Lookbook ${i + 1}`}
              style={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "6px",
                display: "block",
              }}
            />
          )
        )}
      </div>

      
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "400", marginBottom: "25px" }}>
          You may also like
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div key={product.id}>
              <div style={{ position: "relative" }}>
                {product.sale && (
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      background: "#0d6efd",
                      color: "#fff",
                      padding: "2px 8px",
                      fontSize: "12px",
                      borderRadius: "4px",
                    }}
                  >
                    Sale
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                    marginBottom: "10px",
                  }}
                />
              </div>
              <div style={{ fontSize: "14px", marginBottom: "4px" }}>
                {product.name}
              </div>
              <div style={{ fontSize: "14px" }}>
                {product.oldPrice && (
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#888",
                      marginRight: "6px",
                    }}
                  >
                    {product.oldPrice}
                  </span>
                )}
                {product.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
