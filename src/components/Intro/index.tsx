import { intro } from "json_objects";
import { AboutMe } from "components";

export default function index() {
  return (
    <main className=" font-nunito flex flex-col items-center w-full">
      <section className="pt-36 pb-72 flex flex-col items-center justify-center w-full text-white bg-purple-800">
        <h1 className="mb-6 text-3xl font-bold">{intro.heading}</h1>
        <p className="line max-w-3xl text-xl font-light leading-normal text-center">
          {intro.description}
        </p>
      </section>

      <section className="max-w-7xl left-auto -mt-32">
        <AboutMe />
      </section>
    </main>
  );
}
