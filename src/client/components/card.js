import { h } from "hyperapp"

// import Map from "./map"
import sdgs from "../images/sdgs/*.jpg"

import { RainforestText } from "./environments/rainforest"

const textMap = {
    "arctic": null,
    "rainforest": RainforestText,
    "city": null,
}

export const Card = ({ environment, hideCard }) => {
    const Text = textMap[environment.id]
    return (
        <div id="card">
            <div class="close" onclick={() => environment.published ? hideCard() : null}>x</div>
            {/* <Map environment={environment} /> */}
            <div class={"card-hero environment-" + environment.id}>
                <h1>{environment.title}</h1>
            </div>
            <div class="column">
                <Text />
                <p>
                    {environment.sdgs.map(num => (
                        <img class="sdg" src={sdgs[num]} />
                    ))}
                </p>
            </div>
        </div>
    )
}

export default Card