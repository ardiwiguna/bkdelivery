import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BKSlider from "../../assets/data/bkslider.json"

const Slider = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {BKSlider.map((item, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={item.path}
                        alt={item.name}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider