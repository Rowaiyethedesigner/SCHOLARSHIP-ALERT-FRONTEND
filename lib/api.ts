export async function getCalls() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE}/calls`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch scholarships");
  }

  return res.json();
}
