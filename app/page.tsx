import { getCalls } from "@/lib/api";

export default async function Home() {
  let calls = [];

  try {
    calls = await getCalls();
  } catch (error) {
    console.error(error);
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Scholarship Alert Platform</h1>
      <p>
        USA & Canada scholarships focused on Sustainable Development.
      </p>

      <hr style={{ margin: "20px 0" }} />

      {calls.length === 0 && (
        <p>No scholarships available yet.</p>
      )}

      {calls.map((call: any) => (
        <div key={call.id} style={{ marginBottom: 20 }}>
          <h3>{call.title}</h3>
          <p>
            {call.host_country} • {call.degree_level}
          </p>
          <p>SDGs: {call.sdg_tags}</p>
          <p>Deadline: {call.deadline}</p>
          <a href={call.source_url} target="_blank">
            Apply
          </a>
        </div>
      ))}
    </main>
  );
}
