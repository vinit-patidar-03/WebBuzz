import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Schedule() {
  const [selectedTournament, setselectedTournament] = useState({})
  const [selectedRound, setselectedRound] = useState("all")
  const [tournamentsData, setTournamentsData] = useState([])
  const [matchesData, setMatchesData] = useState([])
  // const matchesData = selectedTournament?.matches?.filter(match => selectedRound == 0 || match.round === selectedRound)

  const fetchTournaments = async () => {
    const response = await fetch("http://localhost:3000/tournaments")
    const data = await response.json()
    setTournamentsData(data)
    setselectedTournament(data[0]);
    setMatchesData(data[0].matches);
  }

  useEffect(() => {
    fetchTournaments()
  }, []);
  useEffect(() => {
    setMatchesData(selectedTournament?.matches?.filter(match => selectedRound == 0 || match.round === selectedRound))
  }, [selectedTournament, selectedRound])

  console.log(selectedTournament);


  const rounds = [
    { value: 0, label: "All Rounds" },
    { value: 1, label: "Group Stage" },
    { value: 2, label: "Semi-Finals" },
    { value: 3, label: "Finals" },
  ]
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BirdIcon className="h-6 w-6" />
          <span className="sr-only">XYZ Cricket Organization</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Tournaments
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-secondary"
            prefetch={false}
          >
            Schedule
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Trivia
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Upcoming Matches and Results</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out the upcoming matches and recent results.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <select value={selectedTournament} onChange={(e) => setselectedTournament(e.target.value)}>
                  {tournamentsData.length > 0 && tournamentsData?.map((tournament) => (
                    console.log(tournament),
                    <option key={tournament._id} value={tournament}>
                      {tournament.name}
                    </option>

                  ))}
                </select>
                <select value={selectedRound} onChange={(e) => setselectedRound(e.target.value)}>

                  {rounds.map((round) => (
                    <option key={round.value} value={round.value}>
                      {round.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Matches</h3>
                  <div className="grid gap-2">
                    {matchesData?.map((match, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary p-2 text-primary-foreground">
                            <BirdIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{match.teams}</p>
                            <p className="text-sm text-muted-foreground">{match.date}</p>
                          </div>
                        </div>
                        {match.completed ? (
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                          >
                            View Scorecard
                          </Link>
                        ) : (
                          <Link
                            href="#"
                            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}
                          >
                            View Details
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 XYZ Cricket Organization. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function BirdIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
}