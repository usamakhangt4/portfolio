import { intro } from "json_objects";
import { AboutMe } from "components";

export default function index() {
  return (
    <main className=" font-nunito relative flex flex-col items-center w-full h-screen">
      <section className="pt-36 pb-72 flex flex-col items-center justify-center w-full text-white bg-purple-800">
        <h1 className="mb-6 text-3xl font-bold">{intro.heading}</h1>
        <p className="line max-w-3xl text-xl font-light leading-normal text-center">
          {intro.description}
        </p>
      </section>

      <section className="top-2/3 max-w-7xl absolute left-auto">
        <AboutMe />
      </section>
    </main>
  );
}
