import "./planetSelector.style.scss";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
  selectFilteredPlanets,
  selectPlanets,
} from "../../redux/game/game.selector";
import { selectPlayerSelectedPlanets } from "../../redux/player/player.selector";

import {
  addPlanetStart,
  addVehicleStart,
} from "../../redux/player/player.action";

const PlanetsSelection = ({
  selectorId,
  showVehicles,
  setShowVehicles,
  selectPlanets,
  selectFilteredPlanets,
  selectPlayerSelectedPlanets,
  addPlanet,
  addVehicle,
}) => {
  if (selectPlanets.isFetching || !selectPlanets.value) {
    return <span>Loading...</span>;
  }

  let planetsValue = selectPlanets.value;

  const selectionChangedHandler = (e) => {
    e.preventDefault();
    if (!showVehicles) {
      setShowVehicles(true);
    }

    let planet = JSON.parse(e.target.value);
    addPlanet(selectorId, planet);
    addVehicle(selectorId);
  };

  if (selectFilteredPlanets.length > 0) {
    planetsValue = selectFilteredPlanets;
  }

  return (
    <>
      <select
        onChange={selectionChangedHandler}
        value={JSON.stringify(selectPlayerSelectedPlanets[selectorId])}
        defaultValue="empty"
      >
        <option disabled value="empty">
          -- Pick a Planet --
        </option>
        {planetsValue.map((planet) => (
          <option key={planet.name} value={JSON.stringify(planet)}>
            {planet.name}
          </option>
        ))}
        {selectPlayerSelectedPlanets[selectorId] ? (
          <option
            value={JSON.stringify(selectPlayerSelectedPlanets[selectorId])}
          >
            {selectPlayerSelectedPlanets[selectorId].name}
          </option>
        ) : null}
      </select>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  selectPlanets: selectPlanets,
  selectFilteredPlanets: selectFilteredPlanets,
  selectPlayerSelectedPlanets: selectPlayerSelectedPlanets,
});


// The empty string in addVehicle will help us normalize count
// in some edge cases. This empty string will become a placeholder
// for playerSelectedVehicle with this selectorId
const mapDispatchToProps = (dispatch) => ({
  addPlanet: (selectorId, planet) => {
    dispatch(addPlanetStart(selectorId, planet));
  },
  addVehicle: (selectorId) => dispatch(addVehicleStart(selectorId, "")),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlanetsSelection);
