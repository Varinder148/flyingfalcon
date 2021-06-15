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
}) => {
  if (planets.isFetching) {
    return <h1>Loading</h1>;
  }

  if (!planets.value) {
    return <h1>Something is wrong</h1>;
  }

  let planetsValue = planets.value;

  const selectionChangedHandler = (e) => {
    e.preventDefault();
    let planet = JSON.parse(e.target.value);
    addPlanet(selectorId, planet, playerSelectedPlanets);
  };
  if (filteredPlanets.length > 0) {
    planetsValue = filteredPlanets;
  }
  return (
    <>
      <select
        onChange={selectionChangedHandler}
        value={JSON.stringify(playerSelectedPlanets[selectorId])}
      >
        <option disabled selected value>
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
  addPlanet: (selectorId, planet, playerSelectedPlanets) => {
    dispatch(addPlanetStart(selectorId, planet));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsSelection);
