//фотка начала 
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ position: "relative", width: "100%", height: "80vh" }}>
    
      <Image
        src="/header.png"
        alt="Fashion bags"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgba(0,0,0,0.4)",
        padding: "30px 50px",
        textAlign: "center",
        color: "#fff",
        borderRadius: "4px"
      }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}>
          Industrial design <br /> meets fashion
        </h1>
        <p style={{ fontSize: "14px", marginBottom: "15px" }}>
          Atypical leather goods
        </p>
        <button style={{
          padding: "10px 20px",
          border: "1px solid #fff",
          background: "transparent",
          color: "#fff",
          cursor: "pointer",
          fontSize: "14px"
        }}>
          Add to cart
        </button>
      </div>
    </section>
  );
}
