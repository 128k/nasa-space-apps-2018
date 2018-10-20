import { h, app } from "hyperapp"

import state from "./state"
import actions from "./actions"

import App from "./components/app"

const view = () => (
    <App />
)

const main = app(state, actions, view, document.getElementById("root"))