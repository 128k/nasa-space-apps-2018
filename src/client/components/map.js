import { h } from "hyperapp"

import MapService from "../services/mapping"

export const Map = () => (
    <div id="map" oncreate={el => MapService.init(el)}></div>
)

export default Map