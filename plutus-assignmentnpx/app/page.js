"use client";
import { useState } from "react";

import { FaTelegramPlane, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const faqs = [
    {
      q: "How do I get started?",
      a: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      q: "Do I get rewards instantly?",
      a: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      q: "How do I get a referral link?",
      a: "You can generate your referral link inside the dashboard and share it with your friends.",
    },
  ];

  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
        {/* navbar */}
        <header className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-10 py-6 text-white">
          <div className="flex items-center gap-2">
            {/* <img src="/logo.png" alt="logo" className="w-8 h-8" /> */}
            <h1 className="text-xl font-semibold">Monex</h1>
          </div>

          <nav className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
            <a href="#" className="hover:text-yellow-300">
              About Us
            </a>
            <a href="#" className="hover:text-yellow-300">
              Roadmap
            </a>
            <a href="#" className="hover:text-yellow-300">
              FAQs
            </a>
            <a href="#" className="hover:text-yellow-300">
              Contact Us
            </a>
          </nav>

          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-300">
            Connect Wallet
          </button>
        </header>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/bg-texture.png')" }}
        ></div>

        {/* Yellow glowing sphere */}
        <div className="absolute right-20 top-40 w-72 h-72 bg-yellow-300 rounded-full blur-xl opacity-80 z-0"></div>

        {/* Clean sphere */}
        <div className="absolute right-24 top-48 w-64 h-64 bg-yellow-200 rounded-full z-10 shadow-[0_0_100px_20px_rgba(255,255,0,0.6)]"></div>

        {/* Orbit lines */}
        <div className="absolute w-[120%] h-[120%] -left-20 top-0 pointer-events-none">
          <svg viewBox="0 0 800 800" className="w-full h-full opacity-40">
            <ellipse
              cx="400"
              cy="400"
              rx="350"
              ry="120"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <ellipse
              cx="400"
              cy="400"
              rx="450"
              ry="200"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
            <ellipse
              cx="400"
              cy="400"
              rx="550"
              ry="260"
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Stars */}
        <div className="absolute left-40 top-40 text-white text-3xl">✦</div>
        <div className="absolute right-60 bottom-40 text-white text-3xl">✦</div>

        {/* HERO TEXT */}
        <section className="relative z-20 pt-48 px-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Trusted Multi–Chain <br />
            <span className="text-yellow-300">DEX</span> Platform
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Trade, earn, and own crypto on the all–in–one multi–chain DEX
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-5">
            <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 shadow-lg">
              Connect Wallet
            </button>

            <button className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-full hover:bg-yellow-400/10">
              Trade Crypto
            </button>
          </div>
        </section>

        <section className="relative w-full py-28 text-white overflow-hidden">
          {/* Background Waves */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/bg-texture.png')" }}
          ></div>

          {/* Title */}
          <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold px-6">
            Why <span className="text-yellow-400">MoonEX</span> ?
          </h2>

          {/* Comparison Table */}
          <div className="relative z-10 mt-12 mx-auto max-w-5xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-lg px-10 py-10">
            {/* Header Row */}
            <div className="grid grid-cols-3 text-center font-semibold text-lg mb-6">
              <div className="text-yellow-200 text-left">Comparison</div>
              <div className="flex justify-center items-center">
                {/* <img src="/moonex-logo.png" className="w-6 h-6 mr-2" /> */}
                Moonex
              </div>
              <div className="flex justify-center items-center text-pink-500">
                {/* <img src="/uniswap.png" className="w-6 h-6 mr-2" /> */}
                UNISWAP
              </div>
            </div>

            {/* Data Rows */}
            <div className="grid grid-cols-3 gap-y-4 text-center text-sm text-gray-200">
              {/* Row 1 */}
              <div className="text-left">• Point no one</div>
              <div className="text-green-400 text-xl">✔</div>
              <div className="text-red-500 text-xl">✘</div>

              {/* Row 2 */}
              <div className="text-left">• Point no two this</div>
              <div className="text-green-400 text-xl">✔</div>
              <div className="text-red-500 text-xl">✘</div>

              {/* Row 3 */}
              <div className="text-left">• Point no two this</div>
              <div className="text-green-400 text-xl">✔</div>
              <div className="text-red-500 text-xl">✘</div>

              {/* Row 4 */}
              <div className="text-left">• Point no two this</div>
              <div className="text-green-400 text-xl">✔</div>
              <div className="text-red-500 text-xl">✘</div>

              {/* Row 5 */}
              <div className="text-left">• Point no two this</div>
              <div className="text-green-400 text-xl">✔</div>
              <div className="text-red-500 text-xl">✘</div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-32 flex justify-center text-white overflow-hidden">
          {/* Yellow glowing background rings */}
          <div className="absolute -left-32 top-0 w-[400px] h-[400px] rounded-full bg-yellow-400 opacity-40 blur-3xl"></div>
          <div className="absolute -right-32 top-10 w-[400px] h-[400px] rounded-full bg-yellow-400 opacity-40 blur-3xl"></div>

          {/* Card Container */}
          <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10">
            <h2 className="text-center text-3xl font-bold text-yellow-400 mb-6">
              FAQs
            </h2>

            {/* FAQ List */}
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <div
                  key={i}
                  className="w-full border-b border-white/20 pb-4 cursor-pointer"
                  onClick={(i) => toggleFAQ(i)}
                >
                  <div className="flex justify-between items-center">
                    <p className="text-lg">{item.q}</p>

                    <span className="text-yellow-300 text-2xl">
                      {openIndex === i ? "✔" : "+"}
                    </span>
                  </div>

                  {openIndex === i && (
                    <p className="mt-3 text-sm text-gray-200 leading-relaxed">
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="w-full bg-[#061423] py-12 px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <span className="text-yellow-400 text-2xl font-semibold">
                Moonex
              </span>
            </div>

            {/* Center: Navigation */}
            <div className="flex items-center gap-12 text-white text-lg font-semibold">
              <a href="#about" className="hover:text-yellow-400 duration-200">
                About Us
              </a>
              <a href="#roadmap" className="hover:text-yellow-400 duration-200">
                Roadmap
              </a>
              <a href="#faqs" className="hover:text-yellow-400 duration-200">
                FAQs
              </a>
              <a href="#contact" className="hover:text-yellow-400 duration-200">
                Contact Us
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-white text-2xl font-bold">
                Contact <span className="text-yellow-400">Us</span>
              </h3>

              <div className="flex items-center gap-6 text-white text-3xl">
                <FaTelegramPlane className="hover:text-yellow-400 cursor-pointer" />
                <FaRedditAlien className="hover:text-yellow-400 cursor-pointer" />
                <FaXTwitter className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
