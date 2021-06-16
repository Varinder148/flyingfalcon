import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./vehicleSelector.style.scss";

import {
  filteredVehicles,
  selectAvailableVehicleCount,
  selectVehicles,
} from "../../redux/game/game.selector";
import { addVehicleStart } from "../../redux/player/player.action";
import { playerSelectedVehicles } from "../../redux/player/player.selector";

const VehicleSelector = ({
  selectorId,
  vehicles,
  addVehicle,
  filteredVehicles,
  playerSelectedVehicles,
  selectAvailableVehicleCount
}) => {
  if (vehicles.isFetching) {
    return <span>Loading...</span>;
  }

  const vehicleChangeHandler = (e) => {
    let currVehicle = e.target.value;
    addVehicle(selectorId, currVehicle ? JSON.parse(currVehicle) : null);
  };

  let vehiclesValue = vehicles.value;

  if (filteredVehicles[selectorId]) {
    // alert("triggered");
    console.log("triggered", filteredVehicles[selectorId]);
    console.log("yo", playerSelectedVehicles);
    vehiclesValue = filteredVehicles[selectorId];
  }

  const findCount=(name)=>{
    return selectAvailableVehicleCount.find((vehicle)=> vehicle.name===name).total_no
  }

  return (
    <div className="vehicle-menu">
      {vehiclesValue.map((vehicle, idx) => (
        <div key={vehicle.name}>
          <input
            id={`veh${idx}`}
            type="radio"
            name={`vehicle${selectorId}`}
            value={JSON.stringify(vehicle)}
            checked={
              !vehicle.disabled &&
              playerSelectedVehicles[selectorId] &&
              vehicle.name === playerSelectedVehicles[selectorId].name
            }
            onChange={vehicleChangeHandler}
            disabled={vehicle.disabled || findCount(vehicle.name)===0 }
          />
          <label
            htmlFor={`veh${idx}`}
          >{`${vehicle.name}(${findCount(vehicle.name)})`}</label>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  vehicles: selectVehicles,
  filteredVehicles: filteredVehicles,
  playerSelectedVehicles: playerSelectedVehicles,
  selectAvailableVehicleCount: selectAvailableVehicleCount
});

const mapDispatchToProps = (dispatch) => ({
  addVehicle: (selectorId, currVehicle) =>
    dispatch(addVehicleStart(selectorId, currVehicle)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleSelector);
