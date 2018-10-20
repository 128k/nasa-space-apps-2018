import { h } from 'hyperapp'

export const Intro = ({ hideIntro }) => (
    <div id="intro">
        <p>[App logo]</p>
        <p>Real Earth</p>
        <p>[Intro text]</p>
        <p><small>This app was created as part of the NASA space apps challenge 2018 by Chris Briggs, Sarah Briggs, James Mitchell and Mel Piper.</small></p>
        <button onclick={hideIntro}>Explore!</button>
    </div>
)

export default Intro