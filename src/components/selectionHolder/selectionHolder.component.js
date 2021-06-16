import { useState } from "react";
import PlanetSelector from "../planetSelector/planetSelector.component";
import VehicleSelector from "../vehicleSelector/vehicleSelector.component";

const SelectionHolder = (props) => {
  //UI related state is maintained in Components
  let [showVehicles, setShowVehicles] = useState(false);

  return (
    <>
      <PlanetSelector
        {...props}
        showVehicles={showVehicles}
        setShowVehicles={setShowVehicles}
      />
      {showVehicles && <VehicleSelector {...props} />}
    </>
  );
};

export default SelectionHolder;
