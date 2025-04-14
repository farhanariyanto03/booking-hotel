"use client";

import Image from "next/image";
import Link from "next/link";
import { IoPeopleOutline } from "react-icons/io5";

const Card = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-full h-[260px]">
        <Image
          src="/hero.jpg"
          alt="room"
          fill
          className="object-cover w-full h-full transition duration-300 hover:scale-105"
        />
      </div>

      <div className="p-6 md:p-8 space-y-4">
        <h4 className="text-2xl font-semibold text-gray-800">
          <Link
            href="/rooms"
            className="hover:text-orange-500 transition duration-200"
          >
            Luxury Room
          </Link>
        </h4>

        <div className="text-xl text-gray-700">
          <span className="font-bold">Rp. 500.000</span>{" "}
          <span className="text-sm text-gray-400">/ Night</span>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <IoPeopleOutline size={20} />
            <span className="text-sm">2 People</span>
          </div>

          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm md:text-base px-6 py-2 rounded-full transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
