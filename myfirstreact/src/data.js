import Cardimg from "./assets/athelete.png";
import Cardimg2 from "./assets/wedding-photography.png";
import Cardimg3 from "./assets/mountain-bike.png";

export default [
    {
        id: 1,
        country: "USA",
        title: "Life lessons with katie Zaferes",
        description: "I will share with you what i call \"Positively Impactful Moments of",
        price: 136,
        coverImg: Cardimg,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "interested in becoming a wedding photographer? for beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that will last a lifetime  will share with you what i call \"Positively Impactful Moments of",
        price: 125,
        coverImg: Cardimg2,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norewegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: Cardimg3,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 6
    }
]