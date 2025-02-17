import Image, { StaticImageData } from 'next/image'

interface Props {
    src: StaticImageData;
    title: string;
    text: string;
    imgCss: string;
    cardCss: string;
}

function CardShowCase({ src, title, text, imgCss, cardCss}: Props) {

  return (
    <div className={`${cardCss} center-flex gap-4`}>
      <Image src={src} alt={title} className={`${imgCss} w-[430px] h-[566px]`} />
      <div className='center-flex text-gray-600 gap-2'>
        <h4 className='font-bold text-2xl'>{title}</h4>
        <p className='text-center max-w-md font-semibold'>{text}</p>
      </div>
    </div>
  )
}

export default CardShowCase
