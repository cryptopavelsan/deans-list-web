// Next
import Link from "next/link";
import Image from "next/image";
// React
import React, { useState, useEffect } from "react";
// Types
import type { FC } from "react";

export const NavBar: FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 67.5) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(function onFirstMount() {
    function onScroll() {
      changeNavbarColor();
    }

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* NavBar / Header */}
      <div
        className={`fixed z-[999] flex h-[87.5px] flex-row border-white text-[21px] text-neutral-content md:pb-3 ${
          colorChange ? "colorChange navbar" : "navbar"
        }`}
        id="navbar"
      >
        <div className="z-2 navbar-start flex">
          <div className="flex-none lg:hidden">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn-circle btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content rounded-box menu-compact mt-3 w-52 bg-black p-2 shadow"
              >
                <li className="list-none">
                  <Link href="/services">
                    <div className="btn-ghost rounded-btn btn-md btn">
                      SERVICES
                    </div>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/joindl">
                    <button className="btn-ghost rounded-btn btn-md btn">
                      JOIN US
                    </button>
                  </Link>
                </li>
                <li className="list-none">
                  <Link href="/networkstate">
                    <button className="btn-ghost rounded-btn btn-md btn">
                      Network State
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex hidden content-center lg:flex">
            <Link href="/">
              <Image
                src="/images/logo-dl.svg"
                alt="Dean's List Web3 Feedback Service"
                className=""
                height={80}
                width={180}
              />
            </Link>
          </div>
        </div>

        {/* Nav Links */}
        <div className="z-[999] hidden md:inline md:navbar-center">
          <div className="z-[999] flex items-stretch"></div>
        </div>

        {/* Wallet & Settings */}
        <div className="navbar-end">
          <div className="flex content-center lg:hidden">
            <Link href="/">
              <Image
                src="/images/logo-dl.svg"
                alt="Dean's List Web3 Feedback Service"
                className=""
                height={80}
                width={180}
              />
            </Link>
          </div>
          <Link 
           href="/services"
           className="hidden md:flex"
          >
            <div className="btn-ghost rounded-btn btn-md btn">SERVICES</div>
          </Link>
          <Link href="/joindl" className="hidden lg:flex">
            <button className="btn-ghost rounded-btn btn-md btn">
              JOIN US
            </button>
          </Link>
          <Link href="/networkstate" className="hidden lg:flex">
            <button className="btn-ghost rounded-btn btn-md btn">
              NETWORK STATE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
