import { PersonIcon, HeroIcon } from "svgs";
export default function Hero() {
  return (
    <main className="font-nunito flex flex-col items-center justify-center px-6 py-12">
      <h1 className="mb-6 text-5xl font-extrabold text-gray-800">
        Designer, Front-end Developer & Mentor
      </h1>
      <p className="mb-6 text-3xl font-light text-gray-600">
        I design and code beautifully simple things, and I love what I do.
      </p>
      <figure className="my-8">{PersonIcon}</figure>
      <figure className="">{HeroIcon}</figure>
    </main>
  );
}
