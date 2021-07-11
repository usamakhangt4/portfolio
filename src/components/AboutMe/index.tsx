import { aboutMeCardsData } from "json_objects";

export default function AboutMe() {
  return (
    <main className=" font-nunito rounded-xl grid grid-cols-3 text-center bg-white shadow-2xl">
      {aboutMeCardsData.map((card, index) => (
        <section
          className={`px-11 flex flex-col items-center justify-start py-16 ${
            index === 1 && "border"
          }`}>
          <figure className="mb-8">{card.logo}</figure>
          <h2 className="text-blue-dark my-6 text-2xl font-bold">
            {card.title}
          </h2>
          <p className="h-20 text-lg font-light text-gray-600">
            {card.description}
          </p>
          {card.subIntros.map((subIntro) => (
            <article className=" mt-12">
              <h6 className="mb-2 text-lg font-normal text-purple-800">
                {subIntro.title}
              </h6>
              {subIntro.description ? (
                <p className="text-lg font-light text-gray-600">
                  {subIntro.description}
                </p>
              ) : (
                <ul className="text-lg font-light">
                  {subIntro.list?.map((item) => (
                    <li className="leading-8 text-gray-600">{item}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>
      ))}
    </main>
  );
}
