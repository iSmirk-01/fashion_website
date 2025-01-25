import Link from "next/link"

interface Props {
    href: string
    li: string
}

function LinkLi({ href, li }: Props) {
  return (
    <Link href={href} className={"relative group cursor-pointer active:text-blue-400/80"}>
      <li className="font-semibold">{li}</li>
      <span className="absolute h-[2] w-full bg-greenDark/80 transition-all duration-300 group-hover:scale-x-100 scale-x-0" />
    </Link>
  );
}

export default LinkLi
