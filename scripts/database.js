const database = {
    title:[
        {
            id: crypto.randomUUID(),
            description: "Luxury space that you can afford",
            title: `Where DreamsCome True`
        }
    ],
    
    services: [
        {
            id: 1,
            image: "icon-1.webp",
            title: "Tables",
            description: `Manufacturing craft tables for as 
            long as we do means working with 
            miscellaneous visual styles and types of materials…
            `,
        },
        {
            id: 2,
            image: "icon2.webp",
            title: "Chair & Armchairs",
            description: `Among all other furniture items that we manufacture, 
            the chairs probably 
            showcase the biggest variety of styles!
            `,
        },
        {
            id: 3,
            image: "icon3.webp",
            title: "Bedroom Furniture",
            description: `With bedroom being one of the most important
            lifestyle places in your house,
            equipping it with some quality furniture…
            `,
        },
        {
            id: 4,
            image: "icon4.webp",
            title: "Houseware Furniture",
            description: `Just as it goes for major and small home appliances, 
            the home furniture is either a big
            one like a dining table or a small one…
            `,
        },
        {
            id: 5,
            image: "icon5.webp",
            title: "Office Furniture",
            description: `Every single office, with either 2 or 222 
            employees working there needs a 
            set of essential furniture items.
            `,
        },
        {
            id: 6,
            image: "icon6.webp",
            title: "Kitchen Furniture",
            description: `The kitchen is by far one of the most 
            essential places for your lifestyle. 
            This is why having it equipped with some…
            `,
        },
    ],

    galleries: [
        {
            id: crypto.randomUUID(),
            image: "gallery-1.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-2.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-3.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-4.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-5.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-6.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-7.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-8.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-9.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-10.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-11.jpg",
        },
        {
            id: crypto.randomUUID(),
            image: "gallery-12.jpg",
        },
    ],
    blogs : [
        {
            id: crypto.randomUUID(),
            image: "img2.jpg",
            title: "Why Handcrafted Furniture Lasts Longer",
            description: `Well, if you ask me it’s not just about
            the quality of either the materials used
            in manufacturing or the...`,
            
        },
        {
            id: crypto.randomUUID(),
            image: "img1.jpg",
            title: "Decorating 101: How to Shop for Furniture",
            description: `I suppose that it is important for 
            me to clarify that the topic for 
            this story revolves solely around choosing...`,
            
        },
        {
            id: crypto.randomUUID(),
            image: "img6.jpg",
            title: "Arranging the Furniture at Your Home",
            description: `Well, all I can say on the matter is that the
            composition and the arrangement
            and pairing of one furniture...`,
            
        }
    ],

    cards: [
        {
            id: 1,
            images: [
                "images/card/tables/img7.jpg",
                "images/card/tables/img2.jpg",
                "images/card/tables/img1.jpg",
                "images/card/tables/img4.jpg",
                "images/card/tables/img5.jpg",
                "images/card/tables/img6.jpg",
                ],
            title: "Round-table trend: The best & most stylish!",
            description: `When it comes to dining tables, rectangular iterations have been the gold standard for 
            a very long time which is why it’s so nice to see the arrival of so 
            many stylish round options. From timber to concrete, marble and more, there’s a ’roundie’ to suit any taste.`,
            thumbnail : "images/card/tables/img3.jpg"
        },
        {
            id: 2,
            images: [
                "images/card/img2.jpg",
                "images/card/img3.jpg",
                "images/card/img4.jpg",
                "images/card/img5.jpg",
                "images/card/img6.jpg",
                "images/card/img7.jpg",],
            title: "Leather Sierra Chair",
            description: `The ultimate lounge chair with an industrial steel frame and 100% down cushion.
            Fabric is customizable upon request. Dimensions 36"L x 36"D x 30"H Custom sizes available`,
            thumbnail : "images/card/img1.jpg"
        },
        {
            id: 3,
            images: [
                "images/card/bedroom/img1.jpg",
                "images/card/bedroom/img2.jpg",
                "images/card/bedroom/img4.jpg",
                "images/card/bedroom/img3.jpg",
                "images/card/bedroom/img6.jpg",
                "images/card/bedroom/img7.jpg",],
            title: "ORANGE ACCENT",
            description: "Biasol unite classic with contemporary in the elegant revival of a double-fronted Victorian house in Melbourne.",
            thumbnail : "images/card/bedroom/img5.jpg"
        },
        {
            id: 4,
            images: [
                "images/card/house/img1.jpg",
                "images/card/house/img2.jpg",
                "images/card/house/img4.jpg",
                "images/card/house/img5.jpg",
                "images/card/house/img6.jpg",
                "images/card/house/img7.jpg",],
            title: "Curved Furniture: The Hottest New Trend In Interior Design |",
            description: `From curvaceous sofas to statement-making light fixtures, 
            here are some of our favorite curved furniture designs that are sure to add a bit of drama to your home.`,
            thumbnail : "images/card/house/img3.jpg"
        },
        {
            id: 5,
            images: [
                "images/card/office/img1.jpg",
                "images/card/office/img2.jpg",
                "images/card/office/img3.jpg",
                "images/card/office/img4.jpg",
                "images/card/office/img6.jpg",
                "images/card/office/img7.jpg",],
            title: "Home office",
            description: `Minsk-based architect and interior designer Kanstantsin Remez has shared his latest project with IGNANT:
            ‘II Introvert Residence’ is a concept of a secluded modernist home`,
            thumbnail : "images/card/office/img5.jpg"
        },
        {
            id: 6,
            images: [
                "images/card/kitchen/img1.jpg",
                "images/card/kitchen/img2.jpg",
                "images/card/kitchen/img3.jpg",
                "images/card/kitchen/img4.jpg",
                "images/card/kitchen/img5.jpg",
                "images/card/kitchen/img7.jpg",],
            title: "Black kitchen",
            description: `A desire to maximize space and incorporate more pleasing aesthetics is here, 
            and the following kitchen design trends will be popular in the coming year.`,
            thumbnail : "images/card/kitchen/img6.jpg"
        },
    ],

}

export {database,}