import { h } from "hyperapp"

// import Map from "./map"
import sdgs from "../images/sdgs/*.jpg"

import { GlacierText } from "./environments/glacier"
import { RainforestText } from "./environments/rainforest"
import { CityText } from "./environments/city"

const textMap = {
    "glacier": GlacierText,
    "rainforest": RainforestText,
    "city": CityText,
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
                <hr />
                <h4>Sustainable development goals</h4>
                <p>
                    {environment.sdgs.map(num => (
                        <img class="sdg" src={sdgs[num]} />
                    ))}
                </p>
                <p><small>The United Nations’ <a href="https://sustainabledevelopment.un.org/?menu=1300">Sustainable Development Goals</a> represent 17 challenges which world leaders have committed to work to achieve by 2030. The goals represent environmental, social and economic factors which link and overlap and together can deliver a sustainable future that is fair and equitable and preserves life on land and in our oceans.</small></p>
            </div>
        </div>
    )
}

export default Card