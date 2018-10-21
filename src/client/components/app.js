import { h } from "hyperapp"

import Intro from './intro'
import Card from './card'

export const App = () => (state, actions) => {
    if (state.showIntro) return <Intro hideIntro={actions.hideIntro} />
    return (
        <main>
            {state.environments.map(env => (
                <a class={"hero environment-" + env.id} href="#" onclick={() => env.published ? actions.showEnvironment(env.id) : null}>
                    <p>{env.title}</p>
                </a>
            ))}
            <p class="center"><button href="#" onclick={actions.showIntro}>About this app</button></p>
            {state.selectedEnvironment.active ?
                <Card
                    environment={state.environments.find(env => env.id === state.selectedEnvironment.id)}
                    hideCard={actions.hideCard} /> : null}
        </main>
    )
}

export default App