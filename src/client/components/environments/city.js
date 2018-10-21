import { h } from "hyperapp"

import Carousel from "../carousel"

import images from "../../images/environments/city/timelapse-2/*.jpg"
import airPollutionImage from "../../images/environments/city/air-pollution.png"

export const CityText = () => ({ panelOpen }, { openPanel }) => {

    return (
        <section id="card-text">
            <p>55% of the world’s population lives in cities today, but that is expected to increase to 68% by 2050. This increase would see an additional 2.5 billion people living within cities, particularly in Africa and Asia where 90% of city population growth is expected to be seen. There are currently a number of megacities (defined by the UN as having more than 10,000 inhabitants), with China’s Pearl River Delta as the largest totalling 42 million people, and Tokyo (37 million), New Delhi (29 million), and Shanghai (26 million) following, with projections for 43 megacities to exist by 2030.</p>
            <Carousel delay={3} images={images} />
            <p><small>Urbanisation in China's Pearl River Delta (Zhu San Jiao) between 1988 and 2014</small></p>
            <div class={"panel " + (panelOpen === 0 ? "open" : "")} onclick={() => openPanel(0)}>
                <h2>Urbanisation</h2>
                <p>Increasing urbanisation and growing populations can put strain on infrastructure, from physical aspects such as available land for building homes and transportation, to education and health care systems. Increasing competition on roads can lead to congestion and contribute to air pollution, whilst building work can also affect air quality. Competition for land can make it difficult to support urban growing spaces, especially as high-rise buildings can also reduce natural light availability, but there are opportunities to utilise rooftops to provide vital community spaces and promote healthy lifestyles. Building vertically can also make more efficient use of available space.</p>
                <p>Increasing populations and cities can bring both positive and negative consequences. Cities can be hubs of innovation and growth, increasing wealth and opportunity for their communities. All growth however requires inputs and creates outputs, which can impact on environmental degradation, require energy and water during production, and can cause water, land and air pollution. It is therefore crucial to look at how our cities can be sustainable, creating efficient and clean eco-cities that are resilient to future environmental and social challenges.</p>
            </div>

            <div class={"panel " + (panelOpen === 1 ? "open" : "")} onclick={() => openPanel(1)}>
                <h2>What could this mean?</h2>
                <h3>Air pollution</h3>
                <p>The World Health Organisation (WHO) limits for air pollution are exceeded in most urban areas that measure air quality, exposing over 91% of people in these areas to poor air quality. 7 million deaths every year are attributed to air pollution by WHO from respiratory diseases (i.e. pneumonia), stroke, heart disease, COPD (chronic obstructive pulmonary disease, and lung cancer.</p>
                <img class="card-image" src={airPollutionImage} />
                <p>Diesel engines cause greater environmental and health impacts than unleaded fuel powered engines, and cities can create ‘pollution corridors’ that trap particulate matter and NOx gases (a combination of nitrogen oxide and nitrogen dioxides). Although some cities like Beijing are planning to introduce ‘ventilation corridors’ to reduce poor air quality, scientists suggest these could just relocate polluted air to parts of the city with lower wind strength. Cities are introducing other measures to combat air pollution and smog, such as Paris introducing a pollution sticker scheme, and Copenhagen banning new diesel vehicles from 2019.</p>
                <p>Other causes of air pollution include industry and burning biomass and wood in developing countries to cook and heat homes, putting women at a greater risk of associated health conditions and diseases.</p>
            </div>

            <div class={"panel " + (panelOpen === 2 ? "open" : "")} onclick={() => openPanel(2)}>
                <h2>What can you do?</h2>
                <dl>
                    <dt>Choose public transport</dt>
                    <dd>
                        <p>Supporting public transport networks not only reduces emissions but helps to make these services more economically sustainable. By removing vehicles, particularly single-occupant vehicles, from roads, congestion can be eased and air quality can be improved.</p>
                    </dd>

                    <dt>Avoid diesel vehicles</dt>
                    <dd>
                        <p>Avoiding driving and utilising public transport is even better, but if you need to drive a vehicle, choose an unleaded fuel or electric vehicle to avoid contributing higher levels of NOx and particulate matter that can cause or exacerbate health conditions. </p>
                    </dd>

                    <dt>Shop local</dt>
                    <dd>
                        <p>Supporting local businesses and independent suppliers can reduce transportation costs and invest in the local economy and community. Looking into the ethics of the businesses you buy from can help drive a market for ‘cradle to cradle’ products where products are designed with their end-of-use in mind, and waste products are seen as a resource rather than something to be disposed of.</p>
                    </dd>
                </dl>
            </div>

            <div class={"panel " + (panelOpen === 3 ? "open" : "")} onclick={() => openPanel(3)}>
                <h2>Useful links</h2>
                <a href="https://www.un.org/development/desa/en/news/population/2018-revision-of-world-urbanization-prospects.html">Urban population growth</a><br />
                <a href="https://www.worldbank.org/">The World Bank - tackling poverty and promoting sustainable growth</a><br />
                <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4710587/">Diesel pollution in Europe</a><br />
                <a href="http://www.who.int/airpollution/data/cities/en/">WHO Global Ambient Air Quality Database</a><br />
                <a href="https://www.who.int/airpollution/en/">Air pollution</a><br />
                <a href="https://theconversation.com/green-corridors-protect-cyclists-and-pedestrians-from-pollution-26786">Green corridors</a><br />
                <a href="https://www.nature.com/articles/532441c">Ventilating corridors in Beijing</a><br />
                <a href="https://www.c2ccertified.org/about">Cradle to Cradle Products Innovation Institute </a>
            </div>

        </section >
    )
}