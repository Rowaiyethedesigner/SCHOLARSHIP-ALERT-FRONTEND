type CallQueryParams = {
  q?: string;
  host_country?: string;
  degree_level?: string;
};

export async function getCalls(params: CallQueryParams = {}) {
  const query = new URLSearchParams();

  if (params.q) query.set("q", params.q);
  if (params.host_country) query.set("host_country", params.host_country);
  if (params.degree_level) query.set("degree_level", params.degree_level);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/calls?${query.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return res.json();
}
