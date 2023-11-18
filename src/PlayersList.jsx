import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div class="container">
      <div className="flex-wrap d-flex hover:1.5">
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
