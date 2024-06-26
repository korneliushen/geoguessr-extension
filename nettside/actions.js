"use server";
export async function getLink() {
  const res = await fetch("https://geoguessr-extension-api.vercel.app/link", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
