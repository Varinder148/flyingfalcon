import { createStructuredSelector } from "reselect";
import { filteredPlanets, selectPlanets } from "../../redux/game/game.selector";
import { connect } from "react-redux";
import { playerSelectedPlanets } from "../../redux/player/player.selector";
import { addPlanetStart } from "../../redux/player/player.action";

const PlanetsSelection = ({
  planets,
  addPlanet,
  filteredPlanets,
  selectorId,
  playerSelectedPlanets,
  setShowVehicles,
  showVehicles,
}) => {
  if (planets.isFetching || !planets.value) {
    return <span>Loading...</span>;
  }

  let planetsValue = planets.value;

  const selectionChangedHandler = (e) => {
    e.preventDefault();
    if (!showVehicles) {
      setShowVehicles(true);
    }

    let planet = JSON.parse(e.target.value);
    addPlanet(selectorId, planet);
  };

  if (filteredPlanets.length > 0) {
    planetsValue = filteredPlanets;
  }

  return (
    <>
      <select
        onChange={selectionChangedHandler}
        value={JSON.stringify(playerSelectedPlanets[selectorId])}
        defaultValue="empty"
      >
        <option disabled value="empty">
          -- select an option --
        </option>
        {planetsValue.map((planet) => (
          <option key={planet.name} value={JSON.stringify(planet)}>
            {planet.name}
          </option>
        ))}
        {playerSelectedPlanets[selectorId] ? (
          <option value={JSON.stringify(playerSelectedPlanets[selectorId])}>
            {playerSelectedPlanets[selectorId].name}
          </option>
        ) : null}
      </select>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  planets: selectPlanets,
  filteredPlanets: filteredPlanets,
  playerSelectedPlanets: playerSelectedPlanets,
});

const mapDispatchToProps = (dispatch) => ({
  addPlanet: (selectorId, planet) => {
    dispatch(addPlanetStart(selectorId, planet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsSelection);
