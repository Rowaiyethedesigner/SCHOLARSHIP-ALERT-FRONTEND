import { getCalls } from "@/lib/api";

export default async function Home() {
  let calls = [];

  try {
    calls = await getCalls();
  } catch (e) {}

  return (
    <>
      {/* HERO */}
      <section className="mb-12">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">
          Verified Scholarships for
          <span className="block text-gray-600">
            USA & Canada
          </span>
        </h2>

        <p className="max-w-2xl text-gray-600 text-lg">
          Curated, verified, and sustainability-focused scholarships
          for postgraduate studies in engineering, AI, and development.
        </p>
      </section>

      {/* CONTENT */}
      {calls.length === 0 && (
        <p className="text-gray-500">No scholarships available yet.</p>
      )}

      <section className="grid gap-6 md:grid-cols-2">
        {calls.map((call: any) => (
          <article
            key={call.id}
            className="bg-white rounded-2xl p-6 border hover:shadow-sm transition"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold leading-snug">
                {call.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {call.host_country} · {call.degree_level}
              </p>
            </div>

            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Theme:</strong> {call.theme}</p>
              <p><strong>SDGs:</strong> {call.sdg_tags}</p>
              <p><strong>Deadline:</strong> {call.deadline}</p>
            </div>

            <div className="mt-6">
              <a
                href={call.source_url}
                target="_blank"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
              >
                View official call →
              </a>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
