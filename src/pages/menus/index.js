import React from 'react'

const Menu = () => {
    const cardData = [
        {
            title: 'Card 1',
            description: 'This is card 1',
            image: 'image1.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
        {
            title: 'Card 2',
            description: 'This is card 2',
            image: 'image2.jpg',
        },
    ];
    return (
        <div className="container mt-3">
            <div className="text-center our-menu">
                <h2>
                    Our Menus
                </h2>
            </div>
            <div className="row">
                {cardData.map((card, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={card.image} className="card-img-top" alt={card.title} />
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu