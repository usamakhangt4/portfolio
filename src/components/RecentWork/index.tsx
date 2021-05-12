import { recentWorkList } from "json_objects";

export default function index() {
  const { title, description, mail, list, seeMore, seeMoreIcon, iconWithLink } =
    recentWorkList;

  return (
    <main className="py-36 font-nunito grid items-center justify-center px-6 text-center">
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <p className="mb-5 text-xl font-light leading-normal">
        {description}
        <a href={mail} className="ml-1 font-bold text-purple-800">
          Email me
        </a>
      </p>

      <section className="grid grid-cols-3 gap-6 py-16">
        {list.map((work) => (
          <section className="group w-96 h-72 rounded-xl relative border">
            <article className="group-hover:bg-indigo-900 gap-7 rounded-xl group-hover:opacity-100 absolute inset-0 grid items-center content-center transition-all duration-300 ease-in-out opacity-0">
              <p className="font-Exo_2 max-w-xs m-auto text-2xl text-white">
                {work.title}
              </p>
              <a
                href={work.link}
                className="hover:bg-purple-600 hover:text-white h-11 w-max flex items-center justify-center gap-2 px-4 py-2 mx-auto text-lg text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600 rounded-full">
                <span>Visit Website</span>
                <figure className="w-3">{iconWithLink}</figure>
              </a>
            </article>
            <img
              src={work.img}
              alt="pic of recent work"
              className="rounded-xl"
            />
          </section>
        ))}
      </section>

      <button className="hover:bg-purple-600 hover:text-white flex items-center gap-2 px-4 py-2 m-auto text-xl text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600 rounded-full">
        <figure className="w-5">{seeMoreIcon}</figure>
        <span>{seeMore}</span>
      </button>
    </main>
  );
}
