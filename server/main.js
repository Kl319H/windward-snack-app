import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

/**
 * Created by kristas on 6/26/2017.
 */

/**
 * type: snack, drink other???
 **/
const commissary = [{
    name: "Organic Sliced Apples",
    size: "32 oz",
    image: {
        src: "",
        alt: ""
    },
    price: "$6.99",
    store: "Costco",
    favorite: ""
},
    {
        name: "Welchs Mixed Fruit Fruit Snacks",
        size: "4.5 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$13.89",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Quaker Instant Oatmeal Flavor Variety",
        size: "4 lb 10 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "7.97",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Garden Sea Salt Veggie Straws",
        size: "1.56 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$8.59",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Hershey All Chocolate Fun Size Variety Pack",
        size: "90 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$19.59",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Quaker Chewy Variety Pack Granola Bars",
        size: "3.15 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$8.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Utz Pub Mix",
        size: "44 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$6.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Sunshine Cheez-It",
        size: "3 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$7.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Chex Mix Traditional Savory Snack Mix",
        size: "40 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$5.98",
        store: "Sam's Club",
        favorite: ""
    },
    {
        name: "San Francisco Pretzel Company Sourdough Pretzels",
        size: "52 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "8.09",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kirkland Signature Extra Fancy Mixed Nuts",
        size: "2.5 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$21.89",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kirkland Signature Extra Fancy Unsalted Mixed Nuts",
        size: "2.5",
        image: {
            src: "",
            alt: ""
        },
        price: "$21.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kirkland Signature Trail Mix",
        size: "4 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$15.79",
        store: "Costco",
        favorite: ""
    },
    {
        name: "WildRoots Coastal Berry Blend 100% Natural Trail Mix",
        size: "26 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$11.89",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Nature's Bakery Stone Ground Whole Wheat Fig Bars Variety Pack",
        size: "4.5 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$11.49",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kirkland Signature Bagels (Plain, Onion, Sesame, Parmesan Cheese)",
        size: "2 x 6 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$5.49",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kraft Philadelphia Original Cream Cheese Spread",
        size: "12 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.89",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Adams 100% Natural Crunchy Peanut Butter",
        size: "16 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.89",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Adams 100% Natural Creamy Peanut Butter",
        size: "16 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.89",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Kroger Granulated Sugar",
        size: "4 lbs",
        image: {
            src: "",
            alt: ""
        },
        price: "$2.39",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Twinings English Breakfast Tea Bags",
        size: "50 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$8.59",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Bigelow Earl Grey Black Tea Blend",
        size: "20 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$3.69",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Bigelow Green Tea Pack of 6",
        size: "320 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$24.54",
        store: "Amazon",
        favorite: ""
    },
    {
        name: "Stash Tea Chamomile Caffeine Free Herbal Tea Bags",
        size: "20 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.89",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Bigelow Constant Comment Black Tea Blend",
        size: "20 ct",
        image: {
            src: "",
            alt: ""
        },
        price: "$3.69",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "King Soopers Whole Vitamin D Milk",
        size: "Half Gallon",
        image: {
            src: "",
            alt: ""
        },
        price: "$2.59",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Simply Orange Juice",
        size: "89 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$7.39",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Nestle Coffee Mate French Vanilla Sugar Free Liquid Coffee Creamer",
        size: "64 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$7.99",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Nestle Coffee Mate French Vanilla Coffee Creamer",
        size: "64 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$7.99",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Horizon Organic Organic Half & Half",
        size: "32 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$5.19",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Lay's Classic Potato Chips Party Size!(selection varies)",
        size: "13.75 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.29",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Coca-Cola",
        size: "35 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.65",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Dr Pepper",
        size: "35 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.65",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Sprite",
        size: "35 x 12 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.65",
        store: "Costco",
        favorite: ""
    }, {
        name: "Coca-Cola Zero",
        size: "35 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.65",
        store: "Costco",
        favorite: ""
    }, {
        name: "Pepsi",
        size: "36 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.65",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Mountain Dew",
        size: "12 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$6.09",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "LaCroix",
        size: "24 x 12 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "7.79",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Sparkling Ice",
        size: "18 x 17 fl oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$13.49",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Tradewinds Unsweetened Tea",
        size: "1 gal",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.39",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Tradewinds Tea",
        size: "1 gal",
        image: {
            src: "",
            alt: ""
        },
        price: "$4.39",
        store: "King Soopers",
        favorite: ""
    },
    {
        name: "Kirkland Signature House Blend",
        size: "32 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "$9.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "Kirkland Signature Pure Clover Honey",
        size: "80 oz",
        image: {
            src: "",
            alt: ""
        },
        price: "11.99",
        store: "Costco",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
    {
        name: "",
        size: "",
        image: {
            src: "",
            alt: ""
        },
        price: "",
        store: "",
        favorite: ""
    },
]
