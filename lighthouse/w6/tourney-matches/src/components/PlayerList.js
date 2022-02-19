import playerData from '../data/playerData';
import matchData from '../data/matchData';
import { addWinsToPlayer, preparePlayerData } from '../helpers/playerHelpers';
import Player from './Player';

function PlayerList(props) {
  const preparedPlayerData = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayer(preparedPlayerData, matchData);
  const onePlayer = parsedPlayerData[0];
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      <Player {...onePlayer} />
    </section>
  );
}

export default PlayerList;