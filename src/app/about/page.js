//about
"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 py-10">
        <Image
          src="/about/about1.jpg"
          alt="Bag 1"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/about/about2.jpg"
          alt="Decor"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <Image
          src="/about/about3.jpg"
          alt="Bag 2"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

     
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold mb-6">About</h1>
        <p className="mb-4">
          Mlouye's founder and creative director Meb Rure hails from an
          industrial design background. In 2015, Meb decided to change gears and
          turn her energy towards Mlouye, a collection of exceptional handbags.
          Focusing on quality material, good design, craftsmanship and
          sustainability, Mlouye reflects the epitome of quality over quantity.
        </p>
        <p className="mb-4">
          Meb was highly inspired by the Bauhaus Movement’s artists and
          architects. From Mies van der Rohe’s works to Kandinsky’s paintings,
          to Aalto’s furniture, she acquired a rationalist vision of design by
          gleaning how they served a utilitarian purpose in a cleverly simple
          way. Mlouye merges industrial design and fashion, creating functional
          handbags made of luxurious and honest materials to improve people’s
          lives in small but important ways.
        </p>
        <p className="mb-4">
          Innovation being the key factor alongside aesthetic, Mlouye has
          brought unexpected shapes with smart details, functionality and a new
          luxury feel with a contemporary price point.
        </p>
        <p className="mb-4">
          Istanbul is where Mlouye was born, the company’s headquarters is now
          split between the US, and Turkey.
        </p>
      </div>

      
      <div className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Our quality promise</h2>
        <p className="max-w-3xl mx-auto">
          Quality is never an accident. It is always the result of intelligent
          effort. We spend most of our time and energy for good design and to
          achieve high quality. Every single detail from material to technique
          is thought through with obsessive attention. If our product doesn’t
          satisfy you, we’ll take it back.
        </p>
      </div>
    </div>
  );
}
