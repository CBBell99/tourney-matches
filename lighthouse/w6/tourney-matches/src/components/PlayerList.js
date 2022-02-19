// import playerData from '../data/playerData';
// import matchData from '../data/matchData';
// import { addWinsToPlayer, preparePlayerData } from '../helpers/playerHelpers';
import Player from './Player';

function PlayerList(props) {
  // console.log(props)
  const preparedPlayerData = props.preparePlayerData(props.playerData);
  const parsedPlayerData = props.addWinsToPlayer(preparedPlayerData, props.matchData);
  // const onePlayer = parsedPlayerData[0];
  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      {parsedPlayers}
    </section>
  );
}

export default PlayerList;