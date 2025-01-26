import Card from "../components/Card";
import { roboto_Slab } from "./fonts"
import { FaArrowRightLong } from "react-icons/fa6";
import pex1 from '@/public/images/pexels-dima-valkov-6211621 1.png'
import pex2 from '@/public/images/pexels-dima-valkov-6211616 (1) 2.png'
import pex3 from '@/public/images/pexels-dima-valkov-6503007 3.png'

function BestSelling() {
  return (
    <div className="w-full min-h-[800] flex flex-col  items-center justify-center gap-10 py-12">
      <div className="h-full flex flex-col gap-10 items-center text-greenDark">
        <h1 className={`${roboto_Slab.className} text-6xl`}>Best selling</h1>
        <p className="font-semibold">
          Get in on the trend with our curated selection of best-selling styles.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <Card
          src={pex1}
          alt={"Regular Fit Long Sleeve Top"}
          className={"bg-lime"}
          title={"Regular Fit Long Sleeve Top"}
          price={3899}
          rating={'5.0'}
        />
        <Card
          src={pex2}
          alt={"Black Crop Tailored Jacket"}
          className={"bg-lime"}
          title={"Black Crop Tailored Jacket"}
          price={6299}
          rating={4.9}
        />
        <Card
          src={pex3}
          alt={"Textured Sunset Shirt"}
          className={"bg-lime"}
          title={"Textured Sunset Shirt"}
          price={4999}
          rating={'5.0'}
        />
      </div>
      <button className="flex gap-3 items-center border-2 border-greenDark px-9 py-2 my-5 text-greenDark">
        <span className="font-semibold">See all</span>
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default BestSelling
