import { h } from "hyperapp"

import Map from './map'

export const App = () => (state, actions) => (
    <main>
        <Map />
        <div class="column">
            <h1>Envionment title</h1>
            <p>Ut in odio eleifend, gravida mauris ut, imperdiet turpis. Maecenas egestas tempus lorem id malesuada. Vivamus tristique nisl justo, maximus sollicitudin eros elementum non. Sed consectetur, urna ut condimentum vestibulum, risus turpis egestas nunc, et malesuada ipsum mi ac est. Duis ut pretium risus, id pellentesque tellus. Nullam non dui dapibus, tincidunt risus et, facilisis tortor. Nulla pulvinar mauris non orci scelerisque egestas. Vestibulum id lacus a lectus dignissim ultrices vel quis elit. In convallis bibendum dolor vitae sollicitudin. Duis suscipit ipsum lacus, et ullamcorper diam facilisis euismod. </p>
            <p><a href="#">Find out more</a></p>
            <button>See how it's changing</button>
        </div>
    </main>
)

export default App