import { getCalls } from "@/lib/api";

export default async function Home() {
  let calls = [];

  try {
    calls = await getCalls();
  } catch {}

  return (
    <>
      {/* HERO */}
      <section className="max-w-3xl mb-24">
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Verified postgraduate scholarships
          <span className="block text-gray-500">
            for USA & Canada
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          A curated platform for sustainable development,
          engineering, and AI-focused funding opportunities.
        </p>
      </section>

      {/* LIST */}
      <section className="space-y-10">
        {calls.length === 0 && (
          <p className="text-gray-500">
            No scholarships available at the moment.
          </p>
        )}

        {calls.map((call: any) => (
          <article
            key={call.id}
            className="group"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-medium leading-snug group-hover:underline underline-offset-4">
                {call.title}
              </h2>

              <div className="text-sm text-gray-500">
                {call.host_country} · {call.degree_level}
              </div>

              <div className="text-sm text-gray-600 max-w-3xl">
                Theme: {call.theme}  
                <br />
                SDGs: {call.sdg_tags}
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-500">
                  Deadline: {call.deadline}
                </span>

                <a
                  href={call.source_url}
                  target="_blank"
                  className="text-sm font-medium text-black hover:opacity-70 transition"
                >
                  View official call →
                </a>
              </div>
            </div>

            <div className="mt-10 h-px bg-gray-100" />
          </article>
        ))}
      </section>
    </>
  );
}
