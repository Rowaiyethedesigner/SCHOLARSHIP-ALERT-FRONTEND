import { Suspense } from "react";
import SearchFilters from "./components/SearchFilters";
import { getCalls } from "@/lib/api";

type SearchParams = {
  q?: string;
  host_country?: string;
  degree_level?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  let calls: any[] = [];

  try {
    calls = await getCalls(searchParams);
  } catch (error) {
    console.error(error);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        Scholarship Alert Platform
      </h1>

      {/* SEARCH BAR (MUST BE SUSPENDED) */}
      <Suspense fallback={<div>Loading search…</div>}>
        <SearchFilters />
      </Suspense>

      {/* RESULTS */}
      {calls.length === 0 && <p>No scholarships found.</p>}

      {calls.map((call) => (
        <section key={call.id} style={{ marginBottom: 24 }}>
          <h3>{call.title}</h3>
          <p>
            {call.host_country} · {call.degree_level}
          </p>
          <a href={call.source_url} target="_blank" rel="noreferrer">
            Apply →
          </a>
        </section>
      ))}
    </main>
  );
}
