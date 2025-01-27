import BestSelling from "./ui/BestSelling";
import FeedBack from "./ui/FeedBack";
import Hero from "./ui/Hero";
import Nav from "./ui/Nav";
import Offer from "./ui/Offer";
import OurProducts from "./ui/OurProducts";
import ShowCase from "./ui/ShowCase";

export default function Home() {
  return (
    <div>
        <Nav />
      <div className="space-y-32 min-h-full w-full">
        <Hero />
          <BestSelling />
          <OurProducts />
          <Offer />
          <ShowCase />
          <FeedBack />
      </div>
    </div>
  );
}
