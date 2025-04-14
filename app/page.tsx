import Hero from "@/component/hero";
import Main from "@/component/main";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-gray-800 text-4xl uppercase font-bold">Room & Facilities</h1>
          <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, officiis.</p>
        </div>
        <Main />
      </div>
    </div>
  );
}
