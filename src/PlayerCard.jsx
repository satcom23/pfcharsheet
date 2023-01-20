
function updatePlayerName() {

}

function PlayerCard() {
  return (
    <div>
      <div className="playerCard">
        <div className="nameClass">
          <h1>Raxl</h1>
          <h2>Anti-Paladin</h2>
        </div>
        <div className="playerLevel">
          <h2>3</h2>
        </div>
      </div>
      <div className="playerCard">
         <div className="race">
          <p>Lizard Folk</p>
         </div>
         <div className="Alignment">
          <p>Neutral-Evil</p>
         </div>
         <div className="deity">
          <p>Hecate</p>
         </div>
      </div>
    </div>
  );
}

export default PlayerCard;