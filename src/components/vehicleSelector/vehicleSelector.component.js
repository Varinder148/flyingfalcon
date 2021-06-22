import "./vehicleSelector.style.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectFilteredVehicles,
  selectAvailableVehicleCount,
} from "../../redux/game/game.selector";
import { selectPlayerSelectedVehicles } from "../../redux/player/player.selector";

import { addVehicleStart } from "../../redux/player/player.action";

//refer to test file to see the type of each prop value
export const VehicleSelector = ({
  selectorId,
  addVehicle,
  selectVehicles,
  selectFilteredVehicles,
  selectPlayerSelectedVehicles,
  selectAvailableVehicleCount,
}) => {
  const vehicleChangeHandler = (e) => {
    let currVehicle = e.target.value;
    addVehicle(selectorId, currVehicle ? JSON.parse(currVehicle) : null);
  };

  let vehiclesValue = selectVehicles.value;

  if (selectFilteredVehicles[selectorId]) {
    vehiclesValue = selectFilteredVehicles[selectorId];
  }

  const findCount = (currVehicle) => {
    let foundVehicle = selectAvailableVehicleCount.find(
      (vehicle) => vehicle.name === currVehicle.name
    );
    return foundVehicle ? foundVehicle.total_no : currVehicle.total_no;
  };

  const checkIfCurrentPlayerSelectedVehicleIsEqualToVehicleInLoop = (vehicle) =>
    (selectPlayerSelectedVehicles[selectorId] &&
      vehicle.name === selectPlayerSelectedVehicles[selectorId].name) ||
    false;

  return (
    <div className="vehicle-menu">
      <p>Who will go here?</p>
      {vehiclesValue.map((vehicle, idx) => (
        <div key={vehicle.name}>
          <input
            id={`veh${idx}${selectorId}`}
            type="radio"
            name={`vehicle${selectorId}`}
            value={JSON.stringify(vehicle)}
            checked={
              !vehicle.disabled &&
              checkIfCurrentPlayerSelectedVehicleIsEqualToVehicleInLoop(vehicle)
            }
            onChange={vehicleChangeHandler}
            disabled={
              (vehicle.disabled || findCount(vehicle) === 0) &&
              !checkIfCurrentPlayerSelectedVehicleIsEqualToVehicleInLoop(
                vehicle
              )
            }
          />
          <label htmlFor={`veh${idx}${selectorId}`}>{`${
            vehicle.name
          } (${findCount(vehicle)})`}</label>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  selectFilteredVehicles: selectFilteredVehicles,
  selectPlayerSelectedVehicles: selectPlayerSelectedVehicles,
  selectAvailableVehicleCount: selectAvailableVehicleCount,
});

const mapDispatchToProps = (dispatch) => ({
  addVehicle: (selectorId, currVehicle) =>
    dispatch(addVehicleStart(selectorId, currVehicle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelector);
