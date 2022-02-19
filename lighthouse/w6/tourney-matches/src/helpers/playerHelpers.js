export const preparePlayerData = (playerData) => {
  return Object.values(playerData)
};

export const addWinsToPlayer = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    const currentWins = matchData.reduce((accumulator, match) => {
      if (match.winner === player.gamerTag) {
        return accumulator++
      } else {
        return accumulator
      }
    }, 0);

    player.wins = currentWins;

    return player
  })
};

