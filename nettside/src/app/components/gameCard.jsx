import { redirect } from "next/navigation";
import Link from "next/link";
export default function GameCard({ link }) {
    return (
        <>
            <main className="flex w-11/12 h-24 p-5 border-violet-600 border-4 rounded-3xl mt-4">
                <section className="w-full h-full flex justify-between items-center">
                    <h2 className="text-4xl text-white">Geoguessr party</h2>
                    <Link href={link}>
                        <button className="h-12 w-28 text-white bg-violet-900 rounded-lg ">Join party</button>
                    </Link>
                </section>
            </main>
        </>
    )
}