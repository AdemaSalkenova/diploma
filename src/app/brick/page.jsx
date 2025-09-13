//купить или добавить в корзину
"use client";

import { useState } from "react";
import Image from "next/image";

export default function BrickPage() {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("Cashmere Rose");
  const [showCartPopup, setShowCartPopup] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const colors = ["Cashmere Rose", "Chocolate", "Jade", "Denim", "Dry Rose", "Earth"];
  const recommendations = [
    { name: "Hobo Small", price: "195.00 CAD", img: "/image 3.png" },
    { name: "Bo Soft Strap", price: "365.00 CAD", img: "/image 4.png" },
    { name: "Hobo Large", price: "615.00 CAD", img: "/image 5.png" },
    { name: "Stormi", price: "195.00 CAD", oldPrice: "545.00 CAD", img: "/image 6.png" },
  ];

  const accordionItems = [
    {
      title: "Materials",
      content:
        "Hand-crafted from Italian cow leather. Ultrasuede interior. Comes with a detachable and adjustable shoulder strap.",
    },
    {
      title: "Dimensions",
      content: "Width: 22cm, Height: 15cm, Depth: 8cm. Strap: 110cm adjustable.",
    },
    {
      title: "Care Instructions",
      content: "Wipe with a soft dry cloth. Avoid water, oils, and perfumes.",
    },
    {
      title: "Share",
      content: "Share this product via Facebook, Instagram, Twitter, or Email.",
    },
  ];

  return (
    <div className="font-sans">
      
      <div className="flex flex-col md:flex-row gap-12 p-10">
        
        <div className="flex-1">
          <Image
            src="/f1.png"
            alt="Brick Bag"
            width={600}
            height={600}
            className="rounded-lg border"
          />
          <div className="grid grid-cols-5 gap-4 mt-6">
            {Array.from({ length: 10 }, (_, i) => (
              <Image
                key={i}
                src={`/f${i + 1}.png`}
                alt={`variant ${i + 1}`}
                width={120}
                height={120}
                className="border rounded-md"
              />
            ))}
          </div>
        </div>

        
        <div className="flex-1">
          <h1 className="text-3xl font-medium mb-2">Brick</h1>
          <p className="text-lg mb-6">$385.00 CAD</p>

          
          <div className="mb-6">
            <p className="mb-2 font-medium">Color</p>
            <div className="flex flex-wrap gap-3">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-4 py-1 rounded-full border ${
                    color === c ? "border-black font-semibold" : "border-gray-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          
          <div className="mb-6">
            <p className="mb-2 font-medium">Quantity</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          
          <button
            onClick={() => setShowCartPopup(true)}
            className="w-full bg-black text-white py-3 rounded mb-3"
          >
            Add to cart
          </button>
          <button className="w-full border border-black py-3 rounded">
            Buy it now
          </button>

          
          <p className="mt-6 text-gray-600">
            Inspired by the structural boxy form and shape of a brick, which lends its
            name, the bag is perfectly sized for your everyday essentials, from a large
            phone to your wallet and lipstick.
          </p>

          
          <div className="mt-6 space-y-2">
            {accordionItems.map((item, idx) => (
              <div key={idx} className="border rounded">
                <button
                  className="w-full flex justify-between items-center px-4 py-3 font-medium"
                  onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                >
                  {item.title}
                  <span>{openAccordion === idx ? "−" : "+"}</span>
                </button>
                {openAccordion === idx && (
                  <div className="px-4 pb-4 text-gray-600">{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      
      {showCartPopup && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          onClick={() => setShowCartPopup(false)}
        >
          <div
            className="bg-white rounded-lg p-6 w-96 relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCartPopup(false)}
              className="absolute top-3 right-3 text-xl"
            >
              ✕
            </button>
            <h3 className="mb-4 text-lg">✔ Item added to your cart</h3>
            <div className="flex items-center gap-4">
              <Image
                src="/f1.png"
                alt="Brick"
                width={60}
                height={60}
                className="rounded border"
              />
              <div>
                <p>Brick</p>
                <p>Color: {color}</p>
                <p>Qty: {quantity}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <button className="w-full border border-black py-2 rounded">
                View my cart
              </button>
              <button className="w-full bg-black text-white py-2 rounded">
                Check out
              </button>
            </div>
          </div>
        </div>
      )}

      
      <div className="p-10 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-medium mb-4">A new kind of bag.</h2>
          <p className="text-gray-600 mb-4">
            Unexpected shapes with smart details, functionality, a new luxury feel with a
            contemporary price point.
          </p>
          <button className="px-5 py-2 border border-black rounded">
            Read more
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/f11.png"
            alt="A new kind of bag"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>

      
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-medium mb-2">Free Shipping</h3>
          <p className="text-gray-600">
            Unexpected shapes with smart details, functionality, a new luxury feel with a
            contemporary price point.
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Hassle-Free Exchanges</h3>
          <p className="text-gray-600">
            Exchanges are free. Try from the comfort of your home. We will collect from
            your home, work or an alternative address.
          </p>
        </div>
      </div>

      
      <div className="p-10">
        <h2 className="text-2xl font-medium mb-6">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendations.map((item, i) => (
            <div key={i} className="border rounded-lg p-4 text-center">
              <Image
                src={item.img}
                alt={item.name}
                width={200}
                height={200}
                className="rounded mb-4"
              />
              <p className="font-medium">{item.name}</p>
              {item.oldPrice ? (
                <p>
                  <span className="line-through text-gray-500 mr-2">
                    ${item.oldPrice}
                  </span>
                  <span className="text-red-600 font-semibold">${item.price}</span>
                </p>
              ) : (
                <p className="font-semibold">${item.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
