import { Footer, NavBar, Relatedarticle, RightHero } from "../comp";

export default function Page() {
  return (
    <div className="">
      <div className=" bg-gray-900">
        <NavBar />
      </div>
      <div className="flex">
        <RightHero />
        <Relatedarticle />
      </div>
      <Footer />
    </div>
  );
}
//this
