//поиск
// app/search/page.jsx
export default function SearchPage({ searchParams }) {
  const query = searchParams.query?.toLowerCase() || "";

  const products = [
    { id: 1, name: "Hobo Small", price: 195, image: "/image 3.png", category: "tote bags" },
    { id: 2, name: "Bo Soft Strap", price: 365, image: "/image 4.png", category: "tote bags" },
    { id: 3, name: "Hobo Large", price: 615, image: "/image 5.png", category: "tote bags" },
    { id: 4, name: "Hobo Small", price: 195, image: "/image 7.png", category: "tote bags" },
    { id: 5, name: "Storm!", price: 195, oldPrice: 545, image: "/image 8.png", category: "tote bags" },
    { id: 6, name: "Bo Soft Strap", price: 365, image: "/image 9.png", category: "tote bags" },
  ];

  const filtered = products.filter(
    (p) =>
      p.category.toLowerCase().includes(query) ||
      p.name.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "30px", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <h2 style={{ fontSize: "24px", marginBottom: "15px" }}>Search results</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          readOnly
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            width: "250px",
          }}
        />
        <p style={{ marginTop: "10px", color: "#555" }}>
          {filtered.length} results found for "<b>{query}</b>"
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "25px",
        }}
      >
        {filtered.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #eee",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              background: "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <img
              src={p.image}
              alt={p.name}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <h3 style={{ fontSize: "16px", marginTop: "10px" }}>{p.name}</h3>
            <p style={{ fontSize: "14px", color: "#444" }}>
              {p.oldPrice && (
                <span
                  style={{
                    textDecoration: "line-through",
                    marginRight: "8px",
                    color: "#999",
                  }}
                >
                  ${p.oldPrice}
                </span>
              )}
              ${p.price}
            </p>
            <a
              href={`/product/${p.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 15px",
                background: "black",
                color: "white",
                borderRadius: "4px",
                textDecoration: "none",
              }}
            >
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
