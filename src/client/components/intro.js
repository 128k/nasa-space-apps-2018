import { h } from "hyperapp"

import logo from "../images/logo.png"

export const Intro = ({ hideIntro }) => (
    <div id="intro">
        <img id="logo" src={logo} />
        <p>Explore the planet with Real Earth. Discover different ecosystems and the environmental catastrophes that are affecting the world’s forest, polar regions, coastal areas and more.</p>
        <p>In a post-truth world full of fake news and sensationalising, it can be hard to know what’s actually happening to our planet. Real Earth shows the planet we’re living on evolving over time, and aims to inspire people to work together to undo the damage our home is facing.</p>
        <p>Real Earth aims to inspire hope whilst providing links to social and economic factors that are impacting the environments of our world.</p>
        <button onclick={hideIntro}>Explore!</button>
        <p><small>This app was created as part of the NASA space apps challenge 2018 by Chris Briggs, Sarah Briggs &amp; James Mitchell.</small></p>
    </div>
)

export default Intro