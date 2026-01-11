import { getCalls } from "@/lib/api";
import SearchFilters from "./components/SearchFilters";

type PageProps = {
  searchParams: {
    q?: string;
    host_country?: string;
    degree_level?: string;
    sdg?: string;
  };
};

export default async function Home({ searchParams }: PageProps) {
  let calls: any[] = [];

  try {
    calls = await getCalls(searchParams);
  } catch (error) {
    console.error("Failed to load scholarships", error);
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="max-w-3xl mb-16">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Verified postgraduate scholarships
          <span className="block text-gray-500 mt-2">
            for USA & Canada
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Discover trusted, sustainability-focused funding opportunities
          in engineering, AI, and development — curated and verified.
        </p>
      </section>

      {/* SEARCH + FILTERS */}
      <SearchFilters />

      {/* RESULTS */}
      <section className="space-y-10">
        {calls.length === 0 && (
          <p className="text-gray-500">
            No scholarships match your criteria.
          </p>
        )}

        {calls.map((call) => (
          <article key={call.id} className="group">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium leading-snug group-hover:underline underline-offset-4">
                {call.title}
              </h2>

              <div className="text-sm text-gray-500">
                {call.host_country} · {call.degree_level}
              </div>

              <div className="text-sm text-gray-600 max-w-3xl">
                <p>
                  <strong>Theme:</strong> {call.theme}
                </p>
                <p>
                  <strong>SDGs:</strong> {call.sdg_tags}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  Deadline: {call.deadline}
                </span>

                <a
                  href={call.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-black hover:opacity-70 transition"
                >
                  View official call →
                </a>
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 h-px bg-gray-100" />
          </article>
        ))}
      </section>
    </>
  );
}
