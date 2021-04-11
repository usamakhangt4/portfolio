import { AboutMe } from "components";

export default function index() {
  return (
    <main className=" font-nunito relative flex flex-col items-center w-full h-screen">
      <section className="pt-36 pb-72 flex flex-col items-center justify-center w-full text-white bg-purple-800">
        <h1 className="mb-6 text-3xl font-bold">
          Hi, I’m Usama. Nice to meet you.
        </h1>
        <p className="line max-w-3xl text-xl font-light leading-normal text-center">
          Since beginning my journey as a front-end developer nearly 3 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use. I'm quietly confident, naturally curious,
          and perpetually working on improving my chops one design problem at a
          time.
        </p>
      </section>

      <section className="top-2/3 max-w-7xl absolute left-auto">
        <AboutMe />
      </section>
    </main>
  );
}
