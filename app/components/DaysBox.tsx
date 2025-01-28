interface Props {
    number: string;
    x: string
}

function DaysBox({ number, x }: Props) {
    
  return (
    <div className="bg-white text-greenDark p-2 max-w-[100px] h-[100px] flex flex-col items-center justify-center">
      <div className="text-2xl font-extrabold">{number}</div>
      <p className="font-semibold">{x}</p>
    </div>
  )
}

export default DaysBox
