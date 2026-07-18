/**
 * Mobile-first responsive landing page for players using Next.js 13 with Tailwind CSS.
 * @returns {JSX.Element} The landing page component.
 */
export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center justify-center w-full gap-4 mt-8 sm:items-start">
                    <h1 className="text-4xl font-bold text-center text-black dark:text-white sm:text-left">
                        Welcome to BetterPairings
                    </h1>
                    <p className="text-lg text-center text-black dark:text-white sm:text-left">
                        BetterPairings is a web application that allows players to create and manage their own tournaments. Players can create tournaments, invite other players, and track their progress through the tournament.
                    </p>
                    <div className="flex flex-col items-center justify-center w-full gap-4 mt-8 sm:flex-row sm:items-start">
                        <a

                            href="/tournaments"
                            className="px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            View Tournaments
                        </a>
                        <a
                            href="/tournaments/create"
                            className="px-4 py-2 text-lg font-semibold text-white bg-green-500 rounded hover:bg-green-600"
                        >
                            Create Tournament
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
