import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          fill
          className="object-center object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 capitalize drop-shadow-lg">
          Book Your Luxury Rooms
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get special offer just for you today.
        </p>
        <div className="flex gap-5">
          <Link
            href="/rooms"
            className="bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out"
          >
            Book Now
          </Link>
          <Link
            href="/rooms"
            className="bg-transparent border border-white text-white py-3 px-6 rounded-full hover:bg-white hover:text-orange-500 transition duration-300 ease-in-out"
          >
            Contac Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
