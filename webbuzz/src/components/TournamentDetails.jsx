import React from 'react'
const tournamentDetails = {
    t20: {
      title: 'T20 Tournament',
      venue: 'XYZ Cricket Stadium',
      dates: 'June 1 - June 15, 2023',
      teams: '16 teams',
      playersPerTeam: '11 players',
      participationFee: '$500 per team',
      seatsLeft: '8',
      rules: [
        'Each team bats for 20 overs',
        'Powerplay overs: 1-6',
        'No bowler can bowl more than 4 overs',
      ],
    },
    odi: {
      title: 'ODI Tournament',
      venue: 'ABC Cricket Ground',
      dates: 'July 1 - July 20, 2023',
      teams: '8 teams',
      playersPerTeam: '11 players',
      participationFee: '$600 per team',
      seatsLeft: '12',
      rules: [
        'Each team bats for 50 overs',
        'Powerplay overs: 1-10',
        'No bowler can bowl more than 10 overs',
      ],
    },
    test: {
      title: 'Test Tournament',
      venue: 'DEF Cricket Arena',
      dates: 'August 1 - August 30, 2023',
      teams: '4 teams',
      playersPerTeam: '11 players',
      participationFee: '$800 per team',
      seatsLeft: '4',
      rules: [
        'Each team plays two innings',
        'No restrictions on overs',
        'Five-day format',
      ],
    },
  };
  const TournamentDetails = ({selectedTournament}) => {
    const details = tournamentDetails[selectedTournament] || tournamentDetails.t20;
  return (
    <div className="grid gap-4">
  <h2 className="text-xl font-bold text-white">{details.title}</h2>
  <div className='flex flex-col'>
    <div className='flex gap-3'>
      <span className="font-medium text-gray-400">
        <b>Venue: </b>
        <span className='text-gray-300'>{details.venue}</span>
      </span>
      <span className="font-medium text-gray-400">
        <b>Dates: </b>
        <span className='text-gray-300'>{details.dates}</span>
      </span>
      <span className="font-medium text-gray-400">
        <b>Teams: </b>
        <span className='text-gray-300'>{details.teams}</span>
      </span>
    </div>
    <div className='flex gap-3'>
      <span className="font-medium text-gray-400">
        <b>Players per team: </b>
        <span className='text-gray-300'>{details.playersPerTeam}</span>
      </span>
      <span className="font-medium text-gray-400">
        <b>Participation Fee: </b>
        <span className='text-gray-300'>{details.participationFee}</span>
      </span>
      <span className="font-medium text-gray-400">
        <b>Seats Left: </b>
        <span className='text-gray-300'>{details.seatsLeft}</span>
      </span>
    </div>
    <div className='mt-1'>
      <span className="font-medium text-gray-400 flex items-center gap-3">
        Tournament Rules:
        <ul className="flex gap-3 pl-4">
          {details.rules.map((rule, index) => (
            <li key={index} className='text-gray-300'>{rule}</li>
          ))}
        </ul>
      </span>
    </div>
  </div>
</div>

  )
}

export default TournamentDetails