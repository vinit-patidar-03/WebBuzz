import { useState } from "react"
import {Link} from "react-router-dom"

export default function Schedule() {
  const [selectedTournament, setselectedTournament] = useState("t20")
  const [selectedYear, setselectedYear] = useState("2024")
  const [selectedRound, setselectedRound] = useState("all")
  const upcomingMatches = [
    {
      tournament: "t20",
      year: "2024",
      round: "group",
      teams: "XYZ vs ABC Cricket Club",
      date: "June 15, 2023 - 2:00 PM",
      completed: false,
    },
    {
      tournament: "t20",
      year: "2024",
      round: "group",
      teams: "PQR vs XYZ Cricket Club",
      date: "June 22, 2023 - 3:00 PM",
      completed: false,
    },
    {
      tournament: "odi",
      year: "2024",
      round: "semifinal",
      teams: "XYZ Cricket Club vs ABC Cricket Club",
      date: "June 25, 2023 - 1:00 PM",
      completed: false,
    },
    {
      tournament: "odi",
      year: "2024",
      round: "final",
      teams: "PQR Cricket Club vs XYZ Cricket Club",
      date: "June 30, 2023 - 2:00 PM",
      completed: false,
    },
    {
      tournament: "test",
      year: "2024",
      round: "group",
      teams: "XYZ Cricket Club vs ABC Cricket Club",
      date: "July 5 - July 9, 2023",
      completed: false,
    },
    {
      tournament: "test",
      year: "2024",
      round: "semifinal",
      teams: "PQR Cricket Club vs XYZ Cricket Club",
      date: "July 15 - July 19, 2023",
      completed: false,
    },
  ]
  const recentResults = [
    {
      tournament: "t20",
      year: "2024",
      round: "group",
      teams: "XYZ Cricket Club vs ABC Cricket Club",
      date: "June 10, 2023",
      result: "XYZ won by 5 wickets",
    },
    {
      tournament: "t20",
      year: "2024",
      round: "semifinal",
      teams: "PQR Cricket Club vs XYZ Cricket Club",
      date: "June 15, 2023",
      result: "PQR won by 3 wickets",
    },
    {
      tournament: "odi",
      year: "2024",
      round: "group",
      teams: "XYZ Cricket Club vs ABC Cricket Club",
      date: "June 20, 2023",
      result: "XYZ won by 7 wickets",
    },
    {
      tournament: "odi",
      year: "2024",
      round: "final",
      teams: "PQR Cricket Club vs XYZ Cricket Club",
      date: "June 25, 2023",
      result: "PQR won by 5 wickets",
    },
    {
      tournament: "test",
      year: "2024",
      round: "group",
      teams: "XYZ Cricket Club vs ABC Cricket Club",
      date: "July 1 - July 5, 2023",
      result: "Match drawn",
    },
    {
      tournament: "test",
      year: "2024",
      round: "semifinal",
      teams: "PQR Cricket Club vs XYZ Cricket Club",
      date: "July 10 - July 14, 2023",
      result: "PQR won by an innings and 20 runs",
    },
  ]
  const filteredUpcomingMatches = upcomingMatches.filter(
    (match) =>
      match.tournament === selectedTournament &&
      match.year === selectedYear &&
      (selectedRound === "all" || match.round === selectedRound),
  )
  const filteredRecentResults = recentResults.filter(
    (result) =>
      result.tournament === selectedTournament &&
      result.year === selectedYear &&
      (selectedRound === "all" || result.round === selectedRound),
  )
  const rounds = [
    { value: "all", label: "All Rounds" },
    { value: "group", label: "Group Stage" },
    { value: "semifinal", label: "Semi-Finals" },
    { value: "final", label: "Finals" },
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
                <select value={selectedTournament} onValueChange={(e) => setselectedTournament(e.target.value)}>
                    <option value="t20">T20 Tournament</option>
                    <option value="odi">ODI Tournament</option>
                    <option value="test">Test Tournament</option>
                </select>
                <select value={selectedYear} onValueChange={(e) => setselectedYear(e.target.value)}>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                </select>
                <select value={selectedRound} onValueChange={(e) => setselectedRound(e.target.value)}>
                  
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
                  <h3 className="text-xl font-bold">Upcoming Matches</h3>
                  <div className="grid gap-2">
                    {filteredUpcomingMatches.map((match, index) => (
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
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Recent Results</h3>
                  <div className="grid gap-2">
                    {filteredRecentResults.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-md bg-background p-4 shadow-sm"
                      >
                        <div className="flex items-center gap-2">
                          <div className="rounded-full bg-primary p-2 text-primary-foreground">
                            <BirdIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{result.teams}</p>
                            <p className="text-sm text-muted-foreground">
                              {result.date} - Result: {result.result}
                            </p>
                          </div>
                        </div>
                        <Link
                          href="#"
                          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          prefetch={false}
                        >
                          View Scorecard
                        </Link>
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