// import mapboxgl from "mapbox-gl" // using mapboxgl global var because parcel isn't playing well with mapboxgl from node modules

import config from "../config"

mapboxgl.accessToken = config.mapbox.token

export class MapService {
    static init(node) {
        const map = new mapboxgl.Map({
            container: node,
            style: config.mapbox.styleUrl,
            interactive: false,
        })

        const framesPerSecond = 30
        const initialOpacity = 1
        const initialRadius = 5
        const maxRadius = 30
        const delay = 1000

        let opacity = initialOpacity
        let radius = initialRadius

        map.on('load', () => {

            map.addSource('points', {
                "type": "geojson",
                "data": universities,
            })

            map.addLayer({
                "id": "pulsatingPoint",
                "source": "points",
                "type": "circle",
                "paint": {
                    "circle-radius": initialRadius,
                    "circle-radius-transition": { duration: 0 },
                    "circle-opacity-transition": { duration: 0 },
                    "circle-color": "#B33A3A",
                },
            })

            map.addLayer({
                "id": "staticPoint",
                "source": "points",
                "type": "circle",
                "paint": {
                    "circle-radius": initialRadius,
                    "circle-color": "#B33A3A",
                },
            })

            const animateMarker = () => {
                setTimeout(() => {

                    radius += (maxRadius - radius) / framesPerSecond
                    opacity -= (1 / framesPerSecond)
                    opacity = opacity < 0 ? 0 : opacity

                    map.setPaintProperty('pulsatingPoint', 'circle-radius', radius)
                    map.setPaintProperty('pulsatingPoint', 'circle-opacity', opacity)

                    if (opacity <= 0) {
                        radius = initialRadius
                        opacity = initialOpacity
                        setTimeout(() => requestAnimationFrame(animateMarker), delay)
                    } else {
                        requestAnimationFrame(animateMarker)
                    }
                }, 1000 / framesPerSecond)

            }

            animateMarker()
        });

        return map
    }
}

export default MapService