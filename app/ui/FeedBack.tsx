import React from 'react'
import QuoteCard from '../components/QuoteCard'
import { roboto_Slab } from '../lib/fonts';
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function FeedBack() {
  return (
    <div className="center-flex gap-20 my-20 px-8">
      <h1
        className={`${roboto_Slab.className} text-5xl text-greenDark font-bold`}
      >
        Feedback Corner
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 place-items-center">
        <QuoteCard
          title={"Emily Wilson"}
          text={
            "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I'm beyond satisfied!"
          }
          css={""}
        />
        <QuoteCard
          title={"Sarah Thompson"}
          text={
            "I absolutely love the quality and style of the clothing I purchased from this website. customer service was outstanding, and I received my order quickly. Highly recommended!"
          }
          css={""}
        />
        <QuoteCard
          title={"Olivia Martinez"}
          text={
            "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!"
          }
          css={"lg:col-span-2 2xl:col-span-1"}
        />
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="cursor-pointer p-3 shadow-md hover:bg-lime">
          <FaAngleLeft />
        </button>

        <button className="cursor-pointer p-3 shadow-md hover:bg-lime">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default FeedBack
