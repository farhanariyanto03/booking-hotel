"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/rooms", label: "Rooms" },
    { href: "/contact", label: "Contact" },
    { href: "/myreversation", label: "My Reservation" },
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/room", label: "Manage Room" },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
      >
        {open ? <IoClose className="w-8 h-8" /> : <IoMenu className="w-8 h-8" />}
      </button>

      {/* Navigation Menu */}
      <div
        className={`${
          open ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 items-start md:items-center text-gray-700 font-medium">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-md transition duration-200 ${
                    isActive
                      ? "text-orange-600 bg-orange-100"
                      : "hover:bg-orange-100 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/login"
              className="inline-block bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-200 shadow-md"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
