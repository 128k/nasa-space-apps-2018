import L from 'leaflet'

// import config from "../config"
import eventBus from "../services/EventBus"

export class MapService {
    static init(node, config) {

        const map = L.map(node, {
            zoomControl: false,
            attributionControl: false,
            scrollWheelZoom: false,
            keyboard: false,
            touchZoom: false,
            dragging: false,
            boxZoom: false,
            doubleClickZoom: false,

            center: [-2.2119, 115.5357],
            zoom: 10,
            // Values are x and y here instead of lat and long elsewhere.
            maxBounds: [
                [-120, -220],
                [120, 220]
            ]
        });

        const template =
            '//gibs-{s}.earthdata.nasa.gov/wmts/epsg3857/best/' +
            '{layer}/default/{time}/{tileMatrixSet}/{z}/{y}/{x}.jpg';

        console.log(config.date)
        const layer = L.tileLayer(template, {
            layer: 'MODIS_Terra_CorrectedReflectance_TrueColor',
            tileMatrixSet: 'GoogleMapsCompatible_Level9',
            maxZoom: 9,
            time: config.date,
            tileSize: 256,
            subdomains: 'abc',
            noWrap: true,
            continuousWorld: true,
            // Prevent Leaflet from retrieving non-existent tiles on the
            // borders.
            bounds: [
                [-85.0511287776, -179.999999975],
                [85.0511287776, 179.999999975]
            ],
            attribution:
                '<a href="https://wiki.earthdata.nasa.gov/display/GIBS">' +
                'NASA EOSDIS GIBS</a>&nbsp;&nbsp;&nbsp;' +
                '<a href="https://github.com/nasa-gibs/web-examples/blob/master/examples/leaflet/webmercator-epsg3857.js">' +
                'View Source' +
                '</a>'
        });

        map.addLayer(layer);

        // Force map reload on card environment update
        eventBus.addEventListener("environmentUpdate", () => {
            setTimeout(() => map.invalidateSize(), 100)
        })

        return map
    }
}

export default MapService