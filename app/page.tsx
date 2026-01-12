import SearchFilters from "./components/SearchFilters";
import { getCalls } from "@/lib/api";

type PageProps = {
  searchParams: {
    q?: string;
    host_country?: string;
    degree_level?: string;
  };
};

export default async function Home({ searchParams }: PageProps) {
  let calls: any[] = [];

  try {
    calls = await getCalls(searchParams);
  } catch {}

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>
        Scholarship Alert Platform
      </h1>

      {/* SEARCH BAR — NOW GUARANTEED TO RENDER */}
      <SearchFilters />

      {/* RESULTS */}
      {calls.length === 0 && <p>No scholarships found.</p>}

      {calls.map((call) => (
        <div key={call.id} style={{ marginBottom: 20 }}>
          <h3>{call.title}</h3>
          <p>
            {call.host_country} · {call.degree_level}
          </p>
          <a href={call.source_url} target="_blank">
            Apply →
          </a>
        </div>
      ))}
    </div>
  );
}
