interface Props {
    priceInCents: number;
}

const Price: React.FC<Props> = ({ priceInCents }) => {
  const formatPrice = (cents: number) => 
    new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
    }).format(cents / 100);
    
  return <span className="font-semibold text-gray-500">{formatPrice(priceInCents)}</span>
}

export default Price
