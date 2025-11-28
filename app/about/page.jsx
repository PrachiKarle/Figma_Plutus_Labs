"use client";

import { useEffect, useState } from "react";

export default function ApiDemoPage() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Failed to fetch API");

        const json = await res.json();
        setData(json);
        setFiltered(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Search filter
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(data);
    } else {
      setFiltered(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, data]);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          Public API Data - POSTS Data  <span className="text-yellow-400">Demo</span>
        </h1> 

        {/* Search Box */}
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-md text-black mb-6 outline-none"
        />

        {/* Loading State */}
        {loading && (
          <p className="text-lg text-gray-300">Loading data...</p>
        )}

        {/* Error State */}
        {error && (
          <p className="text-lg text-red-500">{error}</p>
        )}

        {/* Empty State */}
        {!loading && filtered.length === 0 && (
          <p className="text-lg text-gray-400">No results found.</p>
        )}

        {/* Data Grid */}
        <div className="grid gap-6 mt-6 md:grid-cols-2">
          {filtered.map((post) => (
            <div
              key={post.id}
              className="p-6 bg-[#111] rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition"
            >
              <h2 className="text-xl font-semibold mb-2 text-yellow-400">
                {post.title}
              </h2>
              <p className="text-gray-300">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
