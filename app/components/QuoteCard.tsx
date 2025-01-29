import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { roboto_Slab } from "../lib/fonts";

interface Props {
    title: string;
    text: string;
    css: string;
}

function QuoteCard({title, text, css}: Props) {
  return (
  <div className={`${css} flex flex-col items-start justify-between p-6 max-w-[434px] shadow-lg h-[253px]`}>
    <BiSolidQuoteAltLeft className="text-greenDark" />
    <h4 className={`${roboto_Slab.className} text-greenDark text-xl font-bold`}>{title}</h4>
    <p className="text-gray-600 font-medium">{text}</p>
  </div>
);
}

export default QuoteCard;
