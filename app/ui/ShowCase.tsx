import React from 'react'
import { roboto_Slab } from './fonts';
import CardShowCase from '../components/CardShowCase';
import img1 from '@/public/images/img1.png'
import img2 from '@/public/images/img2.png'
import img3 from '@/public/images/img3.png'

function ShowCase() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-12">
        <div className="flex items-center flex-col gap-8 text-greenDark">
          <h1 className={`${roboto_Slab.className} font-bold text-5xl`}>
            Designer Clothes For You
          </h1>
          <p className="font-semibold">
            Immerse yourself in the world of luxury fashion with our
            meticulously crafted designer clothes!
          </p>
        </div>
        <div className="grid grid-cols1 md:grid-cols-3 place-items-center gap-4">
          <CardShowCase
                src={img1}
                title={"Accessories"}
                text={"Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats."}
                imgCss={'bg-lime'}
                />
          <CardShowCase
                src={img2}
                title={"Dresses"}
                text={"Explore a stunning range of designer dresses, including evening gowns and chic day dresses."}
                imgCss={''}
                />
          <CardShowCase
                src={img3}
                title={"Outerwear"}
                text={"Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons."}
                imgCss={''}
                />
        </div>
    </div>
  );
}

export default ShowCase
