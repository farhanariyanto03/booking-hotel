"use client";

import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/abouts", label: "About" },
    { href: "/rooms", label: "Rooms" },
    { href: "/contact", label: "Contact" },
    { href: "/myreversation", label: "My Reservation", authOnly: true },
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      authOnly: true,
      adminOnly: true,
    },
    {
      href: "/admin/room",
      label: "Manage Room",
      authOnly: true,
      adminOnly: true,
    },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
      >
        {open ? (
          <IoClose className="w-8 h-8" />
        ) : (
          <IoMenu className="w-8 h-8" />
        )}
      </button>

      {/* Navigation Menu */}
      <div
        className={`${
          open ? "block" : "hidden"
        } w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 mt-4 md:mt-0 items-start md:items-center text-gray-700 font-medium">
          {links
            .filter((link) => {
              if (link.adminOnly) return session?.user?.role === "admin";
              if (link.authOnly) return !!session;
              return true;
            })
            .map((link) => {
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
            {session?.user ? (
              <div className="flex items-center gap-4 md:order-2">
                {/* Avatar & Username */}
                <div className="hidden md:flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={session.user.image || "/avatar.svg"}
                      width={40}
                      height={40}
                      className="rounded-full ring-2 ring-orange-500 hover:ring-4 transition duration-200"
                      alt="User Avatar"
                    />
                  </div>
                  {/* <span className="text-sm text-gray-800 font-medium">
                    {session.user.name}
                  </span> */}
                </div>

                <button
                  onClick={() => signOut()}
                  className="hidden md:inline-block bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition duration-200 shadow-md" >
                  Sign Out
                </button>
              </div>
            ) : null}

            {session ? (
              <button
                onClick={() => signOut()}
                className="md:hidden cursor-pointer bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 transition duration-200 shadow-md"
              >
                Sign Out
              </button>
            ) : (
              <Link
                href="/signin"
                className="inline-block bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 transition duration-200 shadow-md"
              >
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
