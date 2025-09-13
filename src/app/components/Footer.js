//номер 7 конец 2 стр 1

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaTiktok,
  FaTumblr,
  FaSnapchatGhost,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-gray-700 px-6 pt-10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        
        
        <div>
          <h3 className="font-semibold mb-4">Quick links</h3>
          <ul className="space-y-2">
            <li><Link href="#">Bags</Link></li>
            <li><Link href="#">Shoes</Link></li>
            <li><Link href="#">Lookbook</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Info</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="#">Contact us</Link></li>
            <li><Link href="#">Shipping policy</Link></li>
          </ul>
        </div>

        
        <div className="flex justify-center items-start">
          <h2 className="text-xl font-bold">DAWN</h2>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Subscribe to our emails</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email"
              className="border p-2 flex-1"
            />
            <button type="submit" className="border px-4">
              →
            </button>
          </form>
        </div>
      </div>

      
      <div className="flex justify-center space-x-4 mt-8 text-xl">
        <FaTwitter />
        <FaFacebookF />
        <FaPinterestP />
        <FaInstagram />
        <FaTiktok />
        <FaTumblr />
        <FaSnapchatGhost />
        <FaYoutube />
        <FaVimeoV />
      </div>

      
      <div className="border-t mt-10 pt-6 pb-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-4">
          <select className="border rounded p-2">
            <option>Canada (CAD $)</option>
            <option>United States (USD $)</option>
            <option>Kazakhstan (KZT ₸)</option>
          </select>
          <select className="border rounded p-2">
            <option>English</option>
            <option>Русский</option>
            <option>Қазақша</option>
          </select>
        </div>

        
        {/* <div className="flex gap-4 items-center">
          <Image src="/payments/dpay.png" alt="DPay" width={40} height={25} />
          <Image src="/payments/visa.png" alt="Visa" width={40} height={25} />
          <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={25} />
          <Image src="/payments/applepay.png" alt="Apple Pay" width={40} height={25} />
          <Image src="/payments/googlepay.png" alt="Google Pay" width={40} height={25} />
          <Image src="/payments/amex.png" alt="Amex" width={40} height={25} />
        </div> */}
      </div>
    </footer>
  );
}
