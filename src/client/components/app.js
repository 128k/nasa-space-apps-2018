import { h } from "hyperapp"

import Intro from './intro'
import Card from './card'

export const App = () => (state, actions) => {
    if (state.showIntro) return <Intro hideIntro={actions.hideIntro} />
    return (
        <main>
            {state.environments.map(env => (
                <a class={"hero environment-" + env.id} href="#" onclick={() => actions.showEnvironment(env.id)}>
                    <p>{env.title}</p>
                </a>
            ))}
            <button href="#" onclick={actions.showIntro}>About this app</button>
            {state.selectedEnvironment.active ?
                <Card
                    environment={state.environments.find(env => env.id === state.selectedEnvironment.id)}
                    hideCard={actions.hideCard} /> : null}
        </main>
    )
}

export default App