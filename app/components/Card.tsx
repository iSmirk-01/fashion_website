import Image, { StaticImageData } from 'next/image'
import Price from './Price';
import Rating from './Rating';


interface Props {
    src: string | StaticImageData;
    alt: string;
    className: string;
    title: string
    price: number
    rating: number | string
}

function Card({ src, alt, className, title, price, rating }: Props) {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-5'>
      <Image src={src} alt={alt} className={`${className}`} width={250} height={100} />
      <div className='flex flex-col items-center justify-center gap-2'>
        <p className='font-bold text-gray-800'>{title}</p>
        <div className='flex gap-4'>
            <Price priceInCents={price}/>
            <div className='h-full bg-gray-500 rounded w-[1.33]' />
            <Rating rating={rating} />
        </div>
      </div>
    </div>
  )
}

export default Card
