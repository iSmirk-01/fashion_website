import Image, { StaticImageData } from 'next/image'

interface Props {
    src: StaticImageData;
    title: string;
    text: string;
    imgCss: string;
}

function CardShowCase({ src, title, text, imgCss}: Props) {

  return (
    <div className='center-flex gap-4'>
      <Image src={src} alt={title} className={`${imgCss} w-[430] h-[566]`} />
      <div className='center-flex text-gray-600 gap-2'>
        <h4 className='font-bold text-2xl'>{title}</h4>
        <p className='text-center max-w-md font-semibold'>{text}</p>
      </div>
    </div>
  )
}

export default CardShowCase
