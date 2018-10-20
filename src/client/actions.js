import config from "./config"
import eventBus from "./services/eventbus"

export const actions = {
    getState: () => state => state,
    showEnvironment: id => {
        eventBus.dispatch("environmentUpdate")
        return { selectedEnvironment: { id, active: true } }
    },
    hideCard: () => state => ({ selectedEnvironment: { ...state.selectedEnvironment, active: false } })
}

export default actions