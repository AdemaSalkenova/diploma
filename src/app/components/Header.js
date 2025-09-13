// задание 1
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showBags, setShowBags] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  
  const products = [
    { id: 1, name: "Business Bag", image: "/f12.png", slug: "business-bag" },
    { id: 2, name: "Lantern Bag", image: "/p2.png", slug: "lantern-bag" },
    { id: 3, name: "Naomi Bag", image: "/p3.png", slug: "naomi-bag" },
    { id: 4, name: "Studio Bag", image: "/p4.png", slug: "studio-bag" },
  ];

  
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setShowSearch(false);
    }
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 40px",
        borderBottom: "1px solid #e5e5e5",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        fontSize: "14px",
        letterSpacing: "0.3px",
        position: "relative",
      }}
    >
      
      <div
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          letterSpacing: "2px",
        }}
      >
        DAWN
      </div>

      
      <nav style={{ display: "flex", gap: "25px" }}>
        
        <button
          onClick={() => setShowBags(!showBags)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#333",
            fontSize: "14px",
          }}
        >
          Bags ▾
        </button>

        
        <Link href="/shoes" style={{ textDecoration: "none", color: "#333" }}>
          Shoes
        </Link>

        
        <Link href="/lookbook" style={{ textDecoration: "none", color: "#333" }}>
          Lookbook
        </Link>
      </nav>

      
      <div style={{ display: "flex", gap: "20px" }}>
        
        <button
          onClick={() => setShowSearch(true)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          🔍
        </button>

        
        <Link href="/contact" style={{ textDecoration: "none" }}>
          👤
        </Link>

        
        <Link href="/cart">🛒</Link>
      </div>

      
      {showBags && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            background: "#fff",
            border: "1px solid #e5e5e5",
            padding: "20px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 10,
          }}
        >
          <Link href="/bags">Shop all</Link>
          <Link href="/bags/tote">Tote bags</Link>
          <Link href="/bags/shoulder">Shoulder bags</Link>
          <Link href="/bags/crossbody">Crossbody bags</Link>
          <Link href="/bags/top-handle">Top handle bags</Link>
          <Link href="/bags/mini">Mini bags</Link>
        </div>
      )}
      {showSearch && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "#fff",
            padding: "20px",
            borderBottom: "1px solid #e5e5e5",
            zIndex: 30,
          }}
        >
          
          <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              style={{
                flex: 1,
                maxWidth: "600px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "10px 20px",
                background: "black",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Search
            </button>
          </div>

          
          {query && (
            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "15px",
              }}
            >
              <h4
                style={{
                  margin: "0 0 10px 0",
                  fontSize: "14px",
                  color: "#666",
                }}
              >
                PRODUCTS
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {filtered.length > 0 ? (
                  filtered.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        textDecoration: "none",
                        color: "#333",
                      }}
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                          border: "1px solid #eee",
                          borderRadius: "4px",
                        }}
                      />
                      {p.name}
                    </Link>
                  ))
                ) : (
                  <p style={{ fontSize: "14px", color: "#999" }}>
                    No results found
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}