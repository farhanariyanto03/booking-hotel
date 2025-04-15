import Image from "next/image";

const Headersection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className="relative h-64 md:h-80 lg:h-[22rem] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold capitalize leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-300 max-w-2xl">
          {subTitle}
        </p>
      </div>
    </header>
  );
};

export default Headersection;
