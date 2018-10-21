import config from "./config"

import environments from './data/environments'

export const state = {
    environments,
    showIntro: false,
    selectedEnvironment: {
        id: environments[0].id,
        active: false
    }
}

export default state