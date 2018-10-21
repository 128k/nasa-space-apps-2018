import { h } from "hyperapp"

import Carousel from "../carousel"

import video from "../../images/environments/glacier/glacier.mp4"
import co2EmissionsImage from "../../images/environments/glacier/co2-emissions.png"
import tempAnomalyImage from "../../images/environments/glacier/temp-anomaly.png"

export const GlacierText = () => ({ panelOpen }, { openPanel }) => {

    return (
        <section id="card-text">
            <p>Glaciers are part of the cryosphere - Earth’s ice-based environments. Glaciers are immense, slow-moving rivers of thick ice which have built up from compressed snow. During the last Ice Age, 32% of the planet was covered with glaciers, a figure which has reduced to around 10% now. Most glaciers are found in Iceland, Greenland, Antarctica, and the Himalayas, but can be found on most continents.</p>
            <video autoplay loop src={video} height="250"></video>
            <p><small>Video showing retreat of Greenland's Jakobshavn glacier between 1997 and 2009.</small></p>
            <div class={"panel " + (panelOpen === 0 ? "open" : "")} onclick={() => openPanel(0)}>
                <h2>Glacial Retreat</h2>
                <p>Although fluctuations in Earth’s climate are a natural phenomenon, changes in global mean temperature and reductions in snowfall on glaciers have contributed to glacial retreat in glaciers around the globe. The world’s fastest moving glacier (17km/10 miles) per year, Jakobshavn in Greenland, retreated more than 40km (25 miles) between 1850 and 2010 but scientists were concerned that the speed of retreat was increasing.</p>
            </div>

            <div class={"panel " + (panelOpen === 1 ? "open" : "")} onclick={() => openPanel(1)}>
                <h2>Causes of Glacial Retreat</h2>
                <p>Climate change is causing the retreating and thinning glaciers being seen around the world. Climate change is caused by the ‘greenhouse effect’, where the sun’s heat becomes trapped within the Earth’s atmosphere by a layer of greenhouse gases. These gases are released by burning fossil fuels, emissions from transportation, and agriculture. Carbon Dioxide (CO2) is the most well-known greenhouse gas, but methane (CH4) has 25 times the effect that CO2 has. Methane is produced from cows burping and farting, but also from rotting biological matter, so permafrost being exposed when ice melts is becoming an additional concern.</p>
                <img class="card-image" src={tempAnomalyImage} />
                <p>Although it is normal for glaciers to calve excess ice into the oceans, if more ice is lost than builds up from snowfall, glaciers can thin and retreat. When ice sheets break off, they can make it easier for land-based glaciers to spill out into the ocean, speeding up glacial retreat.</p>
                <p>Warmer average global air and ocean temperatures also contribute to fluxes and feedback loops which impact on local climates and contribute to snowfall patterns.</p>
                <p>As glaciers retreat and rock is exposed, a feedback loop can also be created leading to further ice melt. This is due to the ‘albedo’ of ice and snow compared to rock. Brighter surfaces reflect the sun’s rays, whereas darker surfaces absorb them. Snow and ice will reflect the sun’s rays, whilst darker rocks will absorb the energy and heat up, adding to the rate of melting.</p>
            </div>

            <div class={"panel " + (panelOpen === 2 ? "open" : "")} onclick={() => openPanel(2)}>
                <h2>What could this mean?</h2>
                <p>Some ice caps and glaciers have already disappeared, and others are projected to be gone within 10 years. This could impact on countries which rely on glaciers for their fresh water supply such as the Indian Himalaya where rivers such as the Brahmaputra are replenished by meltwater from glacier melt.</p>
                <p>Glacier melt also contributes to sea level rise, which could impact countries with low-lying coastlines that are below sea-level such as the Maldives. Jakobshavn contributes more to sea level rise than any other glacier in the Northern Hemisphere, with 1mm of sea level rise between 2000 and 2011 being directly attributable to this one glacier.</p>
            </div>

            <div class={"panel " + (panelOpen === 3 ? "open" : "")} onclick={() => openPanel(3)}>
                <h2>What can you do?</h2>
                <p>It’s much easier to connect an issue like plastic waste to an action can take or behaviour we can change than a huge issue like glacial retreat. The largest cause of glacial retreat and ice melting is climate change, and there are things you can do to reduce your carbon footprint and emissions.</p>
                <dl>
                    <dt>Reduce meat and dairy consumption</dt>
                    <dd>
                        <p>Going vegetarian or vegan might feel like a big challenge, but cutting down on our meat (particularly red meat) and dairy consumption can reduce the amount of methane and CO2 that our diet contributes to global carbon emissions. Try meat-free Mondays and enjoy experimenting with new recipes.</p>
                    </dd>

                    <dt>Reduce food waste</dt>
                    <dd>
                        <p>Whatever food we buy, reducing the amount we throw away can not only save money but save the resources, transportation, energy, water and emissions taken to produce it. Nearly a third of food produced for human consumption is wasted, and with increasing pressure to increase food production and security for a growing world population, tackling waste could save on valuable land availability and resources.</p>
                    </dd>

                    <dt>Avoid flying</dt>
                    <dd>
                        <p>Flying has between 6 and 47 times the impact of car travel per passenger-hour. This figure is due to radiative forcing caused by the nitrous oxide, carbon, sulphur oxide and water vapour (an often forgotten about greenhouse gas) that planes emit. A return flight from Europe to Australia emits 4.5 tonnes of CO2 - the average American’s annual emissions are 16.44 tonnes, British citizens are 5.93 tonnes and Australians were 16.5 in 2016. The average Indian carbon emissions were 1.84 tonnes and Ethiopian footprint was 0.12 tonnes, putting the carbon cost of flying into perspective. Avoiding flights and choosing more local holidays or choosing to travel by train or ferry instead can therefore have a considerable impact on your personal carbon footprint.</p>
                    </dd>

                    <img class="card-image" src={co2EmissionsImage} />

                    <dt>Save energy</dt>
                    <dd>
                        <p>Reducing your energy consumption can not only save you money but reduce your carbon footprint too. Insulating your home can help reduce energy wastage by keeping your home warmer, and when appliances break, looking for the best energy efficiency ratings can help keep operating costs lower - especially for fridges/freezers/boilers which are used daily. You could also switch to a green energy provider that invests in renewable energy to avoid contributing to burning fossil fuels to power your home.</p>
                    </dd>
                </dl>
            </div>

            <div class={"panel " + (panelOpen === 4 ? "open" : "")} onclick={() => openPanel(4)}>
                <h2>Useful links</h2>
                <a href="https://earthobservatory.nasa.gov/images/83837/retreat-of-jakobshavn-glacier-greenland">Retreat of Jakobshavn Glacier</a>
                <a href="https://nsidc.org/cryosphere/glaciers/information.html">Glaciers</a>
                <a href="http://www.pas.va/content/dam/accademia/pdf/es41/es41-kulkarni.pdf">Glaciers as a source of water in the Himalayas</a>
                <a href="https://climate.nasa.gov/news/2785/unexpected-future-boost-of-methane-possible-from-arctic-permafrost/">Permafrost and methane</a>
                <a href="https://ideas.ted.com/methane-isnt-just-cow-farts-its-also-cow-burps-and-other-weird-facts-you-didnt-know-about-this-potent-greenhouse-gas/">Animal agriculture and methane</a>
                <a href="http://www.wrap.org.uk/food-waste-reduction">Food waste reduction</a>
                <a href="https://theconversation.com/its-time-to-wake-up-to-the-devastating-impact-flying-has-on-the-environment-70953">The impact of flying on the environment</a>
                <a href="https://pubs.acs.org/doi/pdf/10.1021/es9039693">Emissions of transportation</a>
                <a href="https://ourworldindata.org/co2-and-other-greenhouse-gas-emissions">Global CO2 and Greenhouse Gas Emissions</a>
            </div>

        </section >
    )
}