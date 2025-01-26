import React from 'react'
import Card from '../components/Card'
import product from '../lib/data'
import Link from 'next/link';
import { roboto_Slab } from './fonts';

function OurProducts() {

  return (
    <div className="min-h-[600] py-16 px-32 w-full flex flex-col items-center gap-20">
      <h1 className={`${roboto_Slab.className} text-greenDark text-4xl whitespace-nowrap`}>
        Our products
      </h1>
      <ul className="text-gray-500 font-semibold hidden sm:flex gap-20 px-8 ">
        <Link href={"/"} className="cursor-pointer">
          <li>SALE</li>
        </Link>
        <Link href={"/"} className="cursor-pointer">
          <li className='text-greenDark underline-offset-8 underline'>HOT</li>
        </Link>
        <Link href={"/"} className="cursor-pointer">
          <li className='whitespace-nowrap'>NEW ARRIVALS</li>
        </Link>
        <Link href={"/"} className="cursor-pointer">
          <li>ACCESSORIES</li>
        </Link>
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 place-items-center gap-10">
        {product.map((item, index: React.Key | null) => (
          <div key={index}>
            <Card
              className={"bg-lime"}
              src={item.image}
              alt={item.title}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurProducts
