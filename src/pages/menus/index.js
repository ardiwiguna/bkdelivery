import React from 'react'
import BKMenu from "../../assets/data/bkmenucard.json"

const Menu = () => {
    
    return (
        <div className="container mt-3">
            <div className="text-center our-menu">
                <h2>
                    Our Menus
                </h2>
            </div>
            <div className="row">
                {BKMenu.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div class="card h-100">
                            <img src={card.path} alt={card.name} class="card-image" />
                            <div class="card-content d-flex">
                                <p class="card-text w-50 text-uppercase menu-title px-2">{card.name}</p>
                                <button class="card-button w-50">Order</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu