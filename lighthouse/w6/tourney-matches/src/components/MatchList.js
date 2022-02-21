// import matchData from "../data/matchData";
import Match from "./Match";

function MatchList(props) {
  const { matchData } = props
  // const oneMatch = props.matchData[0];
  const parsedMatches = matchData.map(match => <Match key={match.matchNumber} {...match} />);
  return (
    <section className="PlayerList MatchList">
      <h1>Match list</h1>
      {parsedMatches}
    </section>
  );
}

export default MatchList;

