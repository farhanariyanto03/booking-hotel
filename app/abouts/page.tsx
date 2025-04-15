import { Metadata } from "next";
import Headersection from "@/component/header-section";
import Image from "next/image";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "About Us",
  description: "Online Booking Hotel",
};

const AboutPage = () => {
  return (
    <div>
      <Headersection
        title="About Us"
        subTitle="Learn more about our mission, vision, and values in providing the best service for your stay."
      />
      <section className="max-w-screen-xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/about-image.jpg"
            width={650}
            height={579}
            alt="About"
            className="rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We are dedicated to making your travel experience smooth and
              memorable. From luxurious accommodations to exceptional customer
              service, we prioritize your comfort and satisfaction.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <IoEyeOutline className="text-orange-500 size-7 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Vision</h4>
                  <p className="text-gray-600">
                    To be the leading online platform for effortless and
                    reliable hotel bookings, ensuring a seamless travel
                    experience.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <IoLocateOutline className="text-orange-500 size-7 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Mission</h4>
                  <p className="text-gray-600">
                    Deliver outstanding customer service, provide accurate
                    booking information, and connect people with the best
                    accommodations worldwide.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
