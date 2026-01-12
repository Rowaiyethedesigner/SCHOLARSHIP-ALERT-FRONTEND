"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SearchFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [country, setCountry] = useState(searchParams.get("host_country") || "");
  const [degree, setDegree] = useState(searchParams.get("degree_level") || "");

  function applySearch() {
    const params = new URLSearchParams();

    if (query) params.set("q", query);
    if (country) params.set("host_country", country);
    if (degree) params.set("degree_level", degree);

    router.push(`/?${params.toString()}`);
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <input
        type="text"
        placeholder="Search scholarships (AI, agriculture, Canada…)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && applySearch()}
        style={{
          width: "100%",
          maxWidth: 600,
          padding: 14,
          fontSize: 16,
          border: "2px solid black",
          marginBottom: 12,
        }}
      />

      <div style={{ display: "flex", gap: 8 }}>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Country</option>
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
        </select>

        <select value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">Degree</option>
          <option value="MEng">MEng</option>
          <option value="MSc">MSc</option>
          <option value="PhD">PhD</option>
        </select>

        <button onClick={applySearch}>Search</button>
      </div>
    </div>
  );
}
