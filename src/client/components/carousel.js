import { h } from "hyperapp"

export const Carousel = ({ images, delay = 1.5 }) => {
    const numImages = Object.keys(images).length
    return (
        <div class="carousel">
            {Object.entries(images).map(([year, image], idx) => (
                <div class="frame" style={"animation-duration: " + numImages * delay + "s; animation-delay: " + delay * idx + "s;"}>
                    <span class="year">{year}</span>
                    <img src={image} />
                </div>
            ))}
        </div>
    )
}

export default Carousel