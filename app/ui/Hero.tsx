import Image from 'next/image'
import { rufina } from './fonts'
import WomanStance from '@/public/images/WomanStance.png'

function Hero() {
  return (
    <div className="bg-lime min-h-[775] w-full grid grid-cols-1 lg:grid-cols-2 place-items-center px-20 overflow-x-hidden">
      <div className="flex flex-col justify-center items-start p-8 h-full gap-10 px-8">
        <h1 className={`${rufina.className} text-greenDark text-5xl/normal md:text-7xl/normal`}>Discover and Find Your Own Fashion!</h1>
        <p className='text-green prose text-base/loose font-semibold'>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className='px-6 py-3 rounded-sm bg-greenDark text-white'>EXPLORE NOW</button>
      </div>
      <Image src={WomanStance} alt={"a woman in a stance"} className='scale-[0.80]' />
    </div>
  );
}

export default Hero
