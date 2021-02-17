import { useState } from "react";

import { closeIcon, menuIcon } from "svgs";
import { classNames } from "utils/helper";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(true);

  const mobilenavClasses = classNames({
    "flex flex-col items-center justify-center gap-2 pb-5 md:pr-3 bg-white md:shadow-none shadow-md md:flex-row": true,
    hidden: !navOpen,
  });
  return (
    <header className="font-nunito py-5">
      <nav className="max-w-7xl md:flex-row md:items-center md:justify-between flex flex-col mx-auto">
        <section className="flex items-center justify-between px-3">
          <img src="/images/mf-logo.svg" alt="logo" className="h-14" />
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="sm:block md:hidden text-purple-800">
            {!navOpen ? menuIcon : closeIcon}
          </button>
        </section>
        <section className={mobilenavClasses}>
          <a
            href="/"
            className="hover:text-purple-600 text-lg font-light text-black cursor-pointer">
            Mentorship
          </a>
          <button className="rounded-3xl hover:bg-purple-600 hover:text-white px-3 py-2 text-lg text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600">
            Say Hello
          </button>
        </section>
      </nav>
    </header>
  );
}
