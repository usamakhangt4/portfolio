import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { CloseIcon, LogoIcon, MenuIcon } from "svgs";
import { navItems } from "json_objects";
import { classNames } from "utils/helper";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(true);

  const mobilenavClasses = classNames({
    "md:flex flex-col items-center justify-center gap-2 md:gap-5  md:pr-3 bg-white md:shadow-none shadow-md md:flex-row": true,
    hidden: !navOpen,
    flex: navOpen,
  });
  return (
    <header className="font-nunito py-5">
      <nav className="max-w-7xl md:flex-row md:items-center md:justify-between flex flex-col mx-auto">
        <section className=" flex items-center justify-between px-3">
          <Router>
            <Link to={"#"}>{LogoIcon}</Link>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="sm:block md:hidden text-purple-800">
              {!navOpen ? MenuIcon : CloseIcon}
            </button>
          </Router>
        </section>
        <section className={mobilenavClasses}>
          {navItems.map((item) => (
            <a
              href={item.link}
              className="hover:text-purple-600 text-lg font-light text-black cursor-pointer">
              {item.title}
            </a>
          ))}

          <button className="rounded-3xl hover:bg-purple-600 hover:text-white px-3 py-2 text-lg text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600">
            Say Hello
          </button>
        </section>
      </nav>
    </header>
  );
}
