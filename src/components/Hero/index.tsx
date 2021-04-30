import { heroData } from "json_objects";
import { PersonIcon, HeroIcon } from "svgs";
export default function Hero() {
  return (
    <main className="font-nunito flex flex-col items-center justify-center px-6 pt-24">
      <h1 className="mb-6 text-5xl font-extrabold text-gray-800">
        {heroData.heading}
      </h1>
      <p className="mb-6 text-3xl font-light text-gray-600">
        {heroData.description}
      </p>
      <figure className="my-8">{PersonIcon}</figure>
      <figure className="mt-16">{HeroIcon}</figure>
    </main>
  );
}
