import { h } from "hyperapp"

import Card from './card'

export const App = () => (state, actions) => (
    <main>
        {state.environments.map(env => (
            <p><a href="#" onclick={() => actions.showEnvironment(env.id)}>{env.title}</a></p>
        ))}
        <Card
            environment={state.environments.find(env => env.id === state.selectedEnvironment.id)}
            active={state.selectedEnvironment.active}
            hideCard={actions.hideCard} />
    </main>
)

export default App