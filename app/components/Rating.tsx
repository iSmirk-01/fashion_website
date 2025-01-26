import { FaStar } from "react-icons/fa";

interface Props {
    rating: number | string
}

function Rating({ rating }: Props) {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-gray-500 font-semibold">{rating}</div>
      <FaStar className="text-yellow-300" />
    </div>
  );
}

export default Rating;
