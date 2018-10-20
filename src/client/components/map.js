import { h } from "hyperapp"

import MapService from "../services/mapping"

export const DualMaps = () => (
    <section id="dual-maps">
        <Map date="2010-10-13" top="true" />
        <Map date="2018-10-01" />
    </section>
)

export const Map = ({ date, top = false }) => (
    <div id="map" class={top ? 'top-layer' : ''} oncreate={el => MapService.init(el, { date })}>
    </div>
)

export default DualMaps