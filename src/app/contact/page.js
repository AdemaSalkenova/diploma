"use client";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-2xl font-semibold mb-6">Contact us</h1>

      
      <div className="mb-8">
        <h2 className="font-medium mb-2">Hours</h2>
        <p>Monday – Friday: 10:00am – 7:30pm</p>
        <p>Saturday: 10:00am – 6:00pm</p>
        <p>Sunday: 11:00am – 6:00pm</p>
      </div>

      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-2"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2"
            required
          />
        </div>
        <input
          type="tel"
          placeholder="Phone number"
          className="w-full border p-2"
        />
        <textarea
          placeholder="Comment"
          className="w-full border p-2 h-32"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white hover:bg-gray-800"
        >
          Send
        </button>
      </form>
    </div>
  );
}
