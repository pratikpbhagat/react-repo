import React from 'react';

const subMenu = (props) => {

    let subMenuItems = [
        {
            menu: {
                category: 'mens',
                type: {
                    name: 'topwear',
                    items: [
                        { link: 'men-tshirts', label: 'T-Shirts' },
                        { link: 'men-casual-shirts', label: 'Casual Shirts' },
                        { link: 'men-formal-shirts', label: 'Formal Shirts' }
                    ]
                }
            },
            mens: {
                topWear: [
                    { link: 'men-tshirts', label: 'T-Shirts' },
                    { link: 'men-casual-shirts', label: 'Casual Shirts' },
                    { link: 'men-formal-shirts', label: 'Formal Shirts' }
                ],
                bottomWear: [
                    { link: 'men-jeans', label: 'Jeans' },
                    { link: 'men-casual-trousers', label: 'Casual Trousers' },
                    { link: 'men-formal-trousers', label: 'Formal Trousers' }
                ],
                footWear: [
                    { link: 'men-casual-shoes', label: 'Casual Shoes' },
                    { link: 'men-sports-shoes', label: 'Sports Shoes' },
                    { link: 'men-formal-shoes', label: 'Formal Shoes' }
                ]
            },
            womens: {
                fusionWear: [
                    { link: 'women-kurtas', label: 'Kurtas' },
                    { link: 'women-suits', label: 'Suits' },
                    { link: 'sarees', label: 'Sarees' }
                ],
                westernWear: [
                    { link: 'women-dresses', label: 'Dresses' },
                    { link: 'women-skirts', label: 'Skirts' },
                    { link: 'women-skirts', label: 'Shrugs' }
                ],
                footWear: [
                    { link: 'flats', label: 'Flats' },
                    { link: 'women-casual-shoes', label: 'Casual Shoes' },
                    { link: 'women-sports-shoes', label: 'Sports Shoes' }
                ]
            },
            kids: {
                boys: [
                    { link: 'boys-tshirts', label: 'T-Shirts' },
                    { link: 'boys-shirts', label: 'Shirts' },
                    { link: 'boys-shorts', label: 'Shorts' }
                ],
                girls: [
                    { link: 'girsl-tshirts', label: 'T-Shirts' },
                    { link: 'girls-dresses', label: 'Dresses' },
                    { link: 'girls-skirts', label: 'Skirts' }
                ],
                footWear: [
                    { link: 'boys-shoes', label: 'Casual Shoes' },
                    { link: 'girls-flats', label: 'Flats' },
                    { link: 'sandals', label: 'Sandals' }
                ]
            },
            homeLiving: {
                flooring: [
                    { link: 'carpets', label: 'Carpets' },
                    { link: 'floor-mats', label: 'Floor Mats' },
                    { link: 'door-mats', label: 'Door Mats' }
                ],
                bath: [
                    { link: 'towels', label: 'Towels' },
                    { link: 'bath-robes', label: 'Bath Robes' },
                    { link: 'rugs', label: 'Rugs' }
                ],
                curtains
            },
            offers:
                [
                    { link: 'offer1', label: 'Shoes at 50%' },
                    { link: 'offer2', label: 'Shirts at 50%' },
                    { link: 'offer3', label: 'Dresses under 1299' }
                ]
        }
    ];

    return (
        <ul>

        </ul>
    );
};

export default subMenu;