import { recentWorkList } from "json_objects";

export default function index() {
  const { title, description, mail, list, seeMore } = recentWorkList;

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
          <article className="w-96 h-72 border">card</article>
        ))}
      </section>

      <button className="rounded-3xl hover:bg-purple-600 hover:text-white px-3 py-2 text-lg text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600">
        See more on Dribbble
      </button>
    </main>
  );
}
