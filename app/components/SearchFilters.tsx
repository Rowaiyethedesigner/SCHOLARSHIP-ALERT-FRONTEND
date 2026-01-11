"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchFilters() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");

  function applySearch() {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (country) params.set("host_country", country);
    if (degree) params.set("degree_level", degree);

    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="mb-16 space-y-6">
      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search scholarships (AI, agriculture, Canada…) "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && applySearch()}
        className="w-full max-w-2xl border rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 text-sm">
        <select
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">Country</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
        </select>

        <select
          onChange={(e) => setDegree(e.target.value)}
          className="border rounded-lg px-4 py-2 bg-white"
        >
          <option value="">Degree</option>
          <option value="MEng">MEng</option>
          <option value="MSc">MSc</option>
          <option value="PhD">PhD</option>
        </select>

        <button
          onClick={applySearch}
          className="ml-auto bg-black text-white px-6 py-2 rounded-lg hover:opacity-90"
        >
          Search
        </button>
      </div>
    </div>
  );
}
