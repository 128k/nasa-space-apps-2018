import { h } from "hyperapp"

import MapService from "../services/mapping"

export const DualMaps = ({ environment }) => (
    <section id="dual-maps">
        {console.log(environment)}
        <div id="map-bg"></div>
        <Map
            date={environment.start.date}
            year={environment.start.year}
            lat={environment.latitude}
            lon={environment.longitude}
            zoom={environment.zoom}
            top="true" />
        <Map
            date={environment.end.date}
            year={environment.end.year}
            lat={environment.latitude}
            lon={environment.longitude}
            zoom={environment.zoom} />
    </section>
)

export const Map = ({ date, year, lat, lon, zoom, top = false }) => (
    <div
        id="map"
        class={top ? 'top-layer' : ''}
        oncreate={el => MapService.init(el, { date, lat, lon, zoom })}
        onupdate={el => MapService.init(el, { date, lat, lon, zoom })}>
        <span class="year">{year}</span>
    </div>
)

export default DualMaps