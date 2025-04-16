import type { Metadata } from "next"
import Headersection from "@/component/header-section"
import Image from "next/image"
import { IoEyeOffOutline, IoAirplane, IoPlayForward, IoPeopleCircle, IoKeyOutline, IoHeartCircle } from "react-icons/io5"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Us",
  description: "Online Booking Hotel - Learn about our story and mission",
}

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50">
      <Headersection
        title="About Us"
        subTitle="Learn more about our mission, vision, and values in providing the best service for your stay."
      />

      {/* Hero Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full font-medium text-sm mb-6">
              Established since 2010
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Creating <span className="text-orange-500">Memorable</span> Stays Around the World
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              We are dedicated to making your travel experience smooth and memorable. From luxurious accommodations to
              exceptional customer service, we prioritize your comfort and satisfaction.
            </p>
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <IoAirplane className="text-orange-500 h-5 w-5" />
                </div>
                <span className="font-semibold">500+ Hotels</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <IoPeopleCircle className="text-orange-500 h-5 w-5" />
                </div>
                <span className="font-semibold">100K+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-orange-100 p-2 rounded-full">
                  <IoKeyOutline className="text-orange-500 h-5 w-5" />
                </div>
                <span className="font-semibold">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="absolute -top-6 -left-6 w-full h-full bg-orange-500 rounded-2xl"></div>
            <Image
              src="/about-image.jpg"
              width={650}
              height={579}
              alt="About"
              className="rounded-2xl shadow-lg relative z-10"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <Image
                        src="/about-image.jpg"
                        width={40}
                        height={40}
                        alt="User"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold">Trusted by</div>
                  <div className="text-xs text-gray-500">100K+ travelers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Mission</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <IoEyeOffOutline className="text-orange-500 h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              To be the leading online platform for effortless and reliable hotel bookings, ensuring a seamless travel
              experience for every customer around the globe.
            </p>
            <ul className="space-y-3">
              {["Global reach", "Innovative solutions", "Customer-first approach"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <IoAirplane className="text-orange-500 h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Deliver outstanding customer service, provide accurate booking information, and connect people with the
              best accommodations worldwide that match their preferences and budget.
            </p>
            <ul className="space-y-3">
              {["Exceptional service", "Transparent pricing", "Personalized recommendations"].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24 bg-white rounded-3xl shadow-sm my-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do, from how we develop our platform to how we interact with our
            customers.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <IoHeartCircle className="text-orange-500 h-6 w-6" />,
              title: "Customer Obsession",
              description:
                "We start with the customer and work backwards, always prioritizing their needs and satisfaction.",
            },
            {
              icon: <IoPlayForward className="text-orange-500 h-6 w-6" />,
              title: "Excellence",
              description:
                "We strive for excellence in every aspect of our service, from website performance to customer support.",
            },
            {
              icon: <IoPeopleCircle className="text-orange-500 h-6 w-6" />,
              title: "Teamwork",
              description:
                "We believe in the power of collaboration and diverse perspectives to create the best solutions.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="p-6 border border-gray-100 rounded-xl hover:border-orange-200 transition-colors duration-300"
            >
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The passionate people behind our success, working tirelessly to make your travel experience exceptional.
          </p>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Sarah Johnson", role: "CEO & Founder" },
            { name: "Michael Chen", role: "CTO" },
            { name: "Emily Rodriguez", role: "Head of Customer Experience" },
            { name: "David Kim", role: "Marketing Director" },
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Image
                  src="/hero.jpg"
                  width={300}
                  height={300}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-orange-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24 mb-8">
        <div className="bg-orange-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-5xl font-serif mb-6">"</div>
            <p className="text-xl md:text-2xl mb-8 font-light italic">
              This booking platform has transformed how we travel. The ease of finding and booking hotels, combined with
              their exceptional customer service, makes them our go-to choice for all our trips.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/hero.jpg"
                  width={48}
                  height={48}
                  alt="Testimonial"
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-bold">Robert Anderson</div>
                <div className="text-orange-100 text-sm">Frequent Traveler</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience Our Service?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied travelers who have found their perfect accommodations through our platform.
          </p>
          <Link href={"/"} className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            Book Your Stay Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
