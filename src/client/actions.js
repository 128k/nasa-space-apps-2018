import config from "./config"
import eventBus from "./services/eventbus"

export const actions = {
    getState: () => state => state,
    showIntro: () => () => ({ showIntro: true }),
    hideIntro: () => () => ({ showIntro: false }),
    showEnvironment: id => {
        eventBus.dispatch("environmentUpdate")
        return { selectedEnvironment: { id, active: true } }
    },
    hideCard: () => state => ({ selectedEnvironment: { ...state.selectedEnvironment, active: false }, panelOpen: null }),
    openPanel: num => state => ({ panelOpen: state.panelOpen !== num ? num : null })
}

export default actions