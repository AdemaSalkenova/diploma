"use client";

import Link from "next/link";

export default function ShoesPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
      }}
    >
      
      <section style={{ marginBottom: "50px" }}>
        <img
          src="/public:car-banner.jpg"
          alt="The Mlouye origin story"
          style={{
            width: "100%",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
        <h2 style={{ fontSize: "22px", marginTop: "20px" }}>
          The Mlouye origin story
        </h2>
        <p style={{ fontSize: "13px", color: "#777" }}>AUGUST 2021</p>
        <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
          Innovation being the key factor alongside aesthetic, Mlouye has
          brought unexpected shapes with smart details, functionality and a new
          luxury feel with a contemporary price point.
        </p>
      </section>

      
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        
        <div>
          <img
            src="/public:stormi.jpg"
            alt="Introducing Stormi"
            style={{
              width: "100%",
              borderRadius: "6px",
              objectFit: "cover",
            }}
          />
          <h3 style={{ fontSize: "18px", marginTop: "15px" }}>
            Introducing Stormi
          </h3>
          <p style={{ fontSize: "13px", color: "#777" }}>AUGUST 2021</p>
          <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
            Stormi is Objet d’art with its unique and sculptural design inspired
            by nature’s favorite form – swirl...
          </p>
        </div>

        
        <Link href="/pleated" style={{ textDecoration: "none", color: "inherit" }}>
          <div>
            <img
              src="/public:pleated.jpg"
              alt="Introducing the Pleated Collection"
              style={{
                width: "100%",
                borderRadius: "6px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            <h3 style={{ fontSize: "18px", marginTop: "15px" }}>
              Introducing the latest creation in our Pleated Collection
            </h3>
            <p style={{ fontSize: "13px", color: "#777" }}>AUGUST 2021</p>
            <p style={{ marginTop: "10px", lineHeight: "1.6" }}>
              Introducing the latest creation in our Pleated Collection, Brick
              presents an architectural elegance...
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
