"use client";

export default function PleatedPage() {
  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "0 20px",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
      }}
    >
      <section style={{ marginBottom: "30px" }}>
        <img
          src="/public:pleated.jpg"
          alt="Pleated Bag"
          style={{
            width: "100%",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
      </section>

      <h2 style={{ fontSize: "22px" }}>
        Introducing the latest creation in our Pleated Collection
      </h2>
      <p style={{ fontSize: "13px", color: "#777" }}>AUGUST 2021</p>

      <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
        Introducing the latest creation in our Pleated Collection, Brick presents
        an architectural elegance. Its front face showcases folded leather with
        zigzag edges – an evolution of the technique and craftsmanship...
      </p>

      <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
        It features a detachable, adjustable strap so it can be worn as a
        crossbody or shoulder bag, or as a top handle design. A practical magnetic
        closure secures your belongings.
      </p>

      <ul style={{ marginTop: "20px", lineHeight: "1.6" }}>
        <li>Hand-crafted from Italian cow leather. Ultrasuede® interior.</li>
        <li>Comes with a detachable and adjustable shoulder strap.</li>
        <li>w:19 x h:11 x d:5.5 cm (7.5 x 4.5 x 2.2 in)</li>
      </ul>

      <section
        style={{
          marginTop: "30px",
        }}
      >
        <img
          src="/pleated-1.jpg"
          alt="Pleated Bag Model"
          style={{
            width: "100%",
            borderRadius: "6px",
            objectFit: "cover",
          }}
        />
      </section>
    </main>
  );
}
