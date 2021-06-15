import './gamepage.style.scss'

import PlanetsSelection from '../../components/planetsSelection/planetsSelection.component'

const Gamepage=()=>(
    <>
        <PlanetsSelection selectorId={1} />
        <PlanetsSelection selectorId={2}/>
        <PlanetsSelection selectorId={3}/>
        <PlanetsSelection selectorId={4}/>
    </>
)

export default Gamepage