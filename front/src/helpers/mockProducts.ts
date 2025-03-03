import { IProduct } from './types';



export const mockProducts: IProduct[] = [
    {
        id: 1,
        name: "Cafetera",
        price: 699,
        description:
            "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
        image:
            "https://cdnlaol.laanonimaonline.com/web/images/productos/b/0000020000/20041.jpg",
        categoryId: 1,
        stock: 9,
    },
    {
        id: 2,
        name: "Lavarropa Drean",
        price: 999,
        description:
            "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
        image:
            "https://cdnlaol.laanonimaonline.com/web/images/productos/c/0000002000/2393.jpg",
        categoryId: 2,
        stock: 10,
    },
    {
        id: 3,
        name: "iPad Pro",
        price: 799,
        description:
            "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipadpro11-digitalmat-gallery-1-202404?wid=728&hei=666&fmt=jpeg&qlt=90&.v=1713308651643",
        categoryId: 3,
        stock: 7,
    },
    {
        id: 4,
        name: "Apple Watch Series 6",
        price: 399,
        description:
            "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1724165625838",
        categoryId: 4,
        stock: 10,
    },
    {
        id: 5,
        name: "AirPods Pro",
        price: 249,
        description:
            "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202409?wid=400&hei=260&fmt=png-alpha&.v=1722974349822",
        categoryId: 5,
        stock: 13,
    },
    {
        id: 6,
        name: "HomePod mini",
        price: 99,
        description:
            "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
        image:
            "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654",
        categoryId: 6,
        stock: 5,
    },
];