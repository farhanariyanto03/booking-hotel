"use client"

import Image from "next/image"
import Link from "next/link"
import {
  IoPeopleOutline,
  IoBedOutline,
  IoWifiOutline,
  IoRestaurantOutline,
  IoHeartOutline,
  IoHeart,
  IoStarSharp,
} from "react-icons/io5"
import { useState } from "react"

const RoomCard = ({
  imageUrl = "/hero.jpg",
  title = "Luxury Suite",
  price = 500000,
  capacity = 2,
  rating = 4.8,
  reviews = 124,
}) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl border border-gray-100">
      {/* Image Container with Overlay */}
      <div className="relative w-full h-[240px] overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md transition-all duration-300 hover:bg-white z-10"
        >
          {isFavorite ? (
            <IoHeart className="text-red-500 text-xl" />
          ) : (
            <IoHeartOutline className="text-gray-700 text-xl" />
          )}
        </button>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
          <span className="font-bold text-gray-800">Rp {price.toLocaleString()}</span>
          <span className="text-sm text-gray-500"> / Night</span>
        </div>
      </div>

      <div className="p-6 space-y-4">
        {/* Title and Rating */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-500 transition-colors duration-300">
            <Link href="/rooms">{title}</Link>
          </h3>
          <div className="flex items-center gap-1">
            <IoStarSharp className="text-yellow-400" />
            <span className="font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-600">
            <IoPeopleOutline className="text-orange-500" />
            <span className="text-sm">{capacity} Guests</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IoBedOutline className="text-orange-500" />
            <span className="text-sm">1 Bed</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IoWifiOutline className="text-orange-500" />
            <span className="text-sm">Free WiFi</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <IoRestaurantOutline className="text-orange-500" />
            <span className="text-sm">Breakfast</span>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="pt-4">
          <Link
            href="#"
            className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-medium text-center py-3 rounded-xl transition duration-300 transform hover:-translate-y-1"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
