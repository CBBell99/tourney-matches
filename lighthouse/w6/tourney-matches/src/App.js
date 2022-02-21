import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayer } from "./helpers/playerHelpers"

function App() {

  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found thier Match!</span></h1>
      <PlayerList
        preparePlayerData={preparePlayerData}
        addWinsToPlayer={addWinsToPlayer}
        matchData={matchData} playerData={playerData} />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
