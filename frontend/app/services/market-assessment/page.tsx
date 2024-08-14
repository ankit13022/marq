import { Footer, Marketass, NavBar, Slider } from "../../comp";

export default function Home() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <Slider/>
      <div className="lg:mx-36 xl:mx-36 mx-10 md:mx-20 mt-5">
        <Marketass />
      </div>
      <Footer />
    </div>
  );
}
