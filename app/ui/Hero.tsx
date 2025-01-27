import Image from 'next/image'
import { rufina } from './fonts'
import WomanStance from '@/public/images/WomanStance.png'

function Hero() {
  return (
    <div className="bg-lime min-h-[700px] w-full grid grid-cols-1 lg:grid-cols-2 place-items-center px-20 gap-8 py-20 overflow-x-hidden  mx-auto">
      <div className="flex flex-col justify-center items-center md:items-start p-8 h-full gap-10 px-8 w-full">
        <h1 className={`${rufina.className} text-greenDark text-7xl/normal md:text-8xl/normal px-4 md:px-0 max-w-[500px] max-h-max self-center md:self-start`}>Discover and Find Your Own Fashion!</h1>
        <p className='text-green prose text-base/loose font-semibold'>
          Explore our curated collection of stylish clothing and accessories
          tailored to your unique taste.
        </p>
        <button className='px-6 py-3 rounded-sm bg-greenDark text-white'>EXPLORE NOW</button>
      </div>
      <Image src={WomanStance} alt={"a woman in a stance"} />
    </div>
  );
}

export default Hero
