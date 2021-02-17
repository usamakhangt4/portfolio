export default function Navbar() {
  return (
    <section className="font-nunito py-5">
      <nav className="max-w-7xl flex content-center justify-between mx-auto">
        <figure className="flex items-center w-20 px-3 py-2">
          <img src="images/mf-logo.svg" alt="" className="w-full" />
        </figure>
        <ul className=" flex px-3 py-2">
          <li className="flex items-center px-3 py-2">
            <span className="hover:text-purple-600 text-lg font-light text-black cursor-pointer">
              Mentorship
            </span>
          </li>
          <li className="px-3 py-2">
            <button className="rounded-3xl hover:bg-purple-600 hover:text-white px-3 py-2 text-lg text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600">
              Say Hello
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}
