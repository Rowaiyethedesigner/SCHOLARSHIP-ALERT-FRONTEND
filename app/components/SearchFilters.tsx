"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchFilters() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("");
  const [degree, setDegree] = useState("");
  const [sdg, setSdg] = useState("");

  function applyFilters() {
    const params = new URLSearchParams();

    if (search) params.set("q", search);
    if (country) params.set("host_country", country);
    if (degree) params.set("degree_level", degree);
    if (sdg) params.set("sdg", sdg);

    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="mb-16 space-y-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search scholarships, fields, keywords…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && applyFilters()}
        className="w-full max-w-2xl border rounded-2xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 text-sm">
        <select
          onChange={(e) => setCountry(e.target.value)}
          className="border rounded-xl px-4 py-2 bg-white"
        >
          <option value="">Country</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
        </select>

        <select
          onChange={(e) => setDegree(e.target.value)}
          className="border rounded-xl px-4 py-2 bg-white"
        >
          <option value="">Degree</option>
          <option value="MEng">MEng</option>
          <option value="MSc">MSc</option>
          <option value="PhD">PhD</option>
        </select>

        <select
          onChange={(e) => setSdg(e.target.value)}
          className="border rounded-xl px-4 py-2 bg-white"
        >
          <option value="">SDG</option>
          <option value="SDG2">SDG 2 – Zero Hunger</option>
          <option value="SDG9">SDG 9 – Innovation</option>
          <option value="SDG13">SDG 13 – Climate</option>
        </select>

        <button
          onClick={applyFilters}
          className="ml-auto bg-black text-white px-5 py-2 rounded-xl hover:opacity-90"
        >
          Apply
        </button>
      </div>
    </div>
  );
}
