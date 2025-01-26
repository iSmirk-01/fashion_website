import { StaticImageData } from "next/image";
import Spread from "@/public/images/SpreadCollarShirt.png";
import White from "@/public/images/pexels-dima-valkov-6211616 (1) 2.png";
import Shine from "@/public/images/ShineOnMeBlouse.png";
import Gray from "@/public/images/GraySolidPaddedJacket.png";
import Printed from "@/public/images/PrintedLooseT-shirt.png";
import Summer from "@/public/images/SummerWindCropShirt.png";
import Tailored from "@/public/images/TailoredJacket.png";
import Solid from "@/public/images/SolidRoundNeckT-shirt.png";

interface Product {
    image: StaticImageData;
    title: string;
    price: number
    rating: string
}

const product: Product[] = [
  {
    image: Spread,
    title: "Spread Collar Shirt",
    price: 4899,
    rating: "5.0",
  },
  {
    image: White,
    title: "White Solid Formal Shirt",
    price: 3900,
    rating: "4.9",
  },
  {
    image: Shine,
    title: "Shine On Me Blouse",
    price: 4299,
    rating: "4.8",
  },
  {
    image: Gray,
    title: "Gray Solid Padded Jacket",
    price: 3299,
    rating: "4.7",
  },
  {
    image: Printed,
    title: "Printed Loose T-shirt",
    price: 3999,
    rating: "5.0",
  },
  {
    image: Summer,
    title: "Summer Wind Crop Shirt",
    price: 3995,
    rating: "4.7",
  },
  {
    image: Tailored,
    title: "Tailored Jacket",
    price: 600,
    rating: "4.9",
  },
  {
    image: Solid,
    title: "Solid Round Neck T-shirt",
    price: 3600,
    rating: "5.0",
  },
];

export default product;