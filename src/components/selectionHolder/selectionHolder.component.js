import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PlanetSelector from "../planetSelector/planetSelector.component";
import VehicleSelector from "../vehicleSelector/vehicleSelector.component";

import { selectVehicles, selectPlanets } from "../../redux/game/game.selector";

const SelectionHolder = ({ selectVehicles, selectPlanets, ...others }) => {
  //UI related state is maintained in Components
  let [showVehicles, setShowVehicles] = useState(false);

  return (
    <>
      {selectPlanets.value.length !== 0 && (
        <PlanetSelector
          {...others}
          showVehicles={showVehicles}
          setShowVehicles={setShowVehicles}
          selectPlanets={selectPlanets}
        />
      )}
      {selectPlanets.value.length !== 0 && showVehicles && (
        <VehicleSelector {...others} selectVehicles={selectVehicles} />
      )}
    </>
  );
};

//listening to changes in orig vehicles and planets
// so that this component can re-render and don't lead to
// inconsistencies
const mapStateToProps = () =>
  createStructuredSelector({
    selectVehicles,
    selectPlanets,
  });

export default connect(mapStateToProps)(SelectionHolder);
