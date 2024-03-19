
import Image from "next/image";
import Link from "next/link";
import { getLink } from "../../actions";
import { redirect } from "next/navigation";


export default async function Home() {
  const data = await getLink()
  let sortedArray = data.rows.reverse()
  let link = data.rows[0].link
  console.log(link)
  // redirect(link)
  return (
    <>
      <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800 animate-pulse">
        <h1 className="text-3xl text-white">Redirecting…</h1>
      </main>;
    </>
  )
}


