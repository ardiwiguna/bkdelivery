import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BKSlider1 from "../../img/slide-promo-1.jpg"
import BKSlider2 from "../../img/slide-promo-2.jpg"
import BKSlider3 from "../../img/slide-promo-3.jpg"
import BKSlider4 from "../../img/slide-promo-4.jpg"
import BKSlider5 from "../../img/slide-promo-5.jpg"
import BKSlider6 from "../../img/slide-promo-6.jpg"
import BKSlider7 from "../../img/slide-promo-7.jpg"
import BKSlider8 from "../../img/slide-promo-8.jpg"
import BKSlider from "../../data/bkslider.json"

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    console.log(BKSlider)
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>\
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider1}
                    alt="Slider 1"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider2}
                    alt="Slider 2"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider3}
                    alt="Slider 3"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider4}
                    alt="Slider 4"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider5}
                    alt="Slider 5"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider6}
                    alt="Slider 6"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider7}
                    alt="Slider 7"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={BKSlider8}
                    alt="Slider 8"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider