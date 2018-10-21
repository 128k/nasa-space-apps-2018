import { h } from "hyperapp"

import Map from "./map"
import sdgs from "../images/sdgs/*.jpg"

import { RainforestText } from "./environments/rainforest"

const textMap = {
    "arctic": null,
    "rainforest": RainforestText,
    "city": null,
}

export const Card = ({ environment, hideCard }) => (
    <div id="card">
        <div class="close" onclick={() => hideCard()}>x</div>
        <Map environment={environment} />
        <div class="column">
            <h1>{environment.title}</h1>
            {textMap[environment.id]}
            <p><a href="#">Find out more</a></p>
            <p>
                {environment.sdgs.map(num => (
                    <img class="sdg" src={sdgs[num]} />
                ))}
            </p>
        </div>
    </div>
)

export default Card