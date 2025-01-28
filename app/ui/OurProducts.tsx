import React from 'react'
import Card from '../components/Card'
import product from '../lib/data'
import Link from 'next/link';
import { roboto_Slab } from './fonts';

function OurProducts() {

  return (
    <div className="min-h-screen w-full py-20 flex flex-col items-center">
      <div className="flex w-[80%] flex-col items-center gap-20">
        <h1
          className={`${roboto_Slab.className} text-greenDark text-5xl whitespace-nowrap`}
        >
          Our products
        </h1>
        <ul className="text-gray-500 font-semibold hidden sm:flex gap-20 px-8 ">
          <Link href={"/"} className="cursor-pointer">
            <li>SALE</li>
          </Link>
          <Link href={"/"} className="cursor-pointer">
            <li className="text-greenDark underline-offset-8 underline">HOT</li>
          </Link>
          <Link href={"/"} className="cursor-pointer">
            <li className="whitespace-nowrap">NEW ARRIVALS</li>
          </Link>
          <Link href={"/"} className="cursor-pointer">
            <li>ACCESSORIES</li>
          </Link>
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8">
          {product.map((item, index: React.Key | null) => (
            <Card
              key={index}
              className={"bg-lime max-w-[299.31] max-h-[355.78]"}
              src={item.image}
              alt={item.title}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProducts
