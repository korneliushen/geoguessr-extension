
import Image from "next/image";
import Link from "next/link";
import { getLink } from "../../actions";
import { redirect } from "next/navigation";


export default async function Home() {
  const data = await getLink()
  console.log(data.rows[0])
  let sortedArray = data.rows.reverse()[0]
  let link = sortedArray
  return (
    <>
      <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800 animate-pulse">
        <h1 className="text-3xl text-white">Redirecting…</h1>
      {redirect(link)}
      </main>;
    </>
  )
}


