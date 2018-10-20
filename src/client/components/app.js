import { h } from "hyperapp"

import Intro from './intro'
import Card from './card'

export const App = () => (state, actions) => {
    if (state.showIntro) return <Intro hideIntro={actions.hideIntro} />
    return (
        <main>
            {state.environments.map(env => (
                <p><a href="#" onclick={() => actions.showEnvironment(env.id)}>{env.title}</a></p>
            ))}
            <p><a href="#" onclick={actions.showIntro}>About this app</a></p>
            {state.selectedEnvironment.active ?
                <Card
                    environment={state.environments.find(env => env.id === state.selectedEnvironment.id)}
                    // active={state.selectedEnvironment.active}
                    hideCard={actions.hideCard} /> : null}
        </main>
    )
}

export default App