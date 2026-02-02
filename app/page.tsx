"use client";
import { useState, useEffect } from "react";

type Call = {
  id: number;
  title: string;
  host_country: string;
  field: string;
  theme: string;
  degree_level: string;
  deadline: string;
  source_url: string;
};

const API_URL = "https://scholarship-alert-backend.onrender.com";

export default function Home() {
  const [search, setSearch] = useState("");
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCalls = async (query = "") => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}/calls?q=${query}`);
      const data = await res.json();
      setCalls(data);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalls(); // load all verified calls on first load
  }, []);

  const handleSearch = () => {
    fetchCalls(search);
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Scholarship Alert Platform
      </h1>

      <p style={{ marginTop: "8px", color: "#555" }}>
        Search verified USA & Canada scholarships focused on sustainable development
      </p>

      {/* SEARCH BAR */}
      <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search scholarships (AI, Engineering, Climate, PhD...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "12px",
            width: "300px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "12px 20px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Search
        </button>
      </div>

      {/* RESULTS */}
      <div style={{ marginTop: "40px" }}>
        {loading && <p>Loading scholarships...</p>}

        {!loading && calls.length === 0 && (
          <p>No scholarships available yet.</p>
        )}

        {!loading &&
          calls.map((call) => (
            <div
              key={call.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "16px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                {call.title}
              </h3>

              <p style={{ marginTop: "6px", color: "#555" }}>
                {call.field} • {call.degree_level} • {call.host_country}
              </p>

              <p style={{ marginTop: "6px", color: "#777" }}>
                Theme: {call.theme}
              </p>

              <a
                href={call.source_url}
                target="_blank"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  color: "#000",
                  textDecoration: "underline",
                  fontSize: "14px",
                }}
              >
                View Scholarship →
              </a>
            </div>
          ))}
      </div>
    </main>
  );
}
