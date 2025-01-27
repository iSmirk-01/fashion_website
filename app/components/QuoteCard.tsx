import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { roboto_Slab } from "../ui/fonts";

interface Props {
    title: string;
    text: string;
}

function QuoteCard({title, text}: Props) {
  return (
  <div className="flex flex-col items-start justify-between p-6 w-[434] h-[253] shadow-lg">
    <BiSolidQuoteAltLeft className="text-greenDark" />
    <h4 className={`${roboto_Slab.className} text-greenDark text-xl font-bold`}>{title}</h4>
    <p className="text-gray-600 font-medium">{text}</p>
  </div>
);
}

export default QuoteCard;
