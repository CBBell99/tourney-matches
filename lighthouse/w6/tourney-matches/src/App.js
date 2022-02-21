import './App.css';
import PlayerList from './components/PlayerList';
import MatchList from './components/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayer } from "./helpers/playerHelpers"

function App() {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(playerDataArray, matchData);

  // const preparedPlayerData = preparePlayerData(playerData);
  // const addWinsToPlayer = addWinsToPlayer(preparedPlayerData, matchData)
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found thier Match!</span></h1>
      <PlayerList
        parsedPlayerData={parsedPlayerData}
      // preparePlayerData={preparePlayerData}
      // addWinsToPlayer={addWinsToPlayer}
      // matchData={matchData} playerData={playerData}
      />
      <MatchList matchData={matchData} />
    </div>
  );
}

export default App;
