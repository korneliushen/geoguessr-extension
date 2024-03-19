import { getLink } from "../../../actions"
import GameCard from "../components/gameCard"

export default async function Games() {
const data = await getLink()
let sortedArray = data.rows.reverse()
let link = data.rows[0].link
    return (
        <>
            <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-neutral-900">
                <h1 className="flex text-white text-7xl m-3">Recent party's</h1>
                <section className="flex flex-col w-8/12 h-screen overflow-y-auto overflow-auto items-center">
                    {sortedArray.map((game, i) => {
                        return <GameCard key={i} link={link} />
                    })}
                </section>
            </main>;
        </>
    )
}