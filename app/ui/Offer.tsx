import Image from 'next/image'
import React from 'react'
import DaysBox from '../components/DaysBox';
import greenShirt from '@/public/svg/Group 37.svg'
import { roboto_Slab } from './fonts';

function Offer() {

  function numberPad(day: number) {
    return day.toString().padStart(2, "0");
  }

  return (
    <div className="w-[80%] mx-auto flex items-center justify-center max-h-[400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center bg-lime w-[1293px] p-10">
        <Image src={greenShirt} alt={"a woman posing"} />
        <div className="flex flex-col items-start justify-center text-greenDark gap-6">
          <h1 className={`${roboto_Slab.className} text-5xl`}>Exclusive offer</h1>
          <p className='font-semibold'>
            Unlock the ultimate style upgrade with our exclusive offer Enjoy
            savings of up to 40% off on our latest New Arrivals
          </p>
          <div className="flex items-center gap-4">
            <DaysBox number={numberPad(6)} x={"Days"} />
            <DaysBox number={numberPad(18)} x={"Hours"} />
            <DaysBox number={numberPad(48)} x={"Min"} />
          </div>
          <button className='px-16 cursor-pointer py-5 bg-greenDark text-white'>BUY NOW</button>
        </div>
      </div>
    </div>
  );
}

export default Offer
