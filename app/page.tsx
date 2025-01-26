import BestSelling from "./ui/BestSelling";
import Hero from "./ui/Hero";
import Nav from "./ui/Nav";
import OurProducts from "./ui/OurProducts";

export default function Home() {
  return (
    <div>
        <Nav />
        <Hero />
        <BestSelling />
        <OurProducts />
    </div>
  );
}
