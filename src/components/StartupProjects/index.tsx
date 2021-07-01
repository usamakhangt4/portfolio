import { startup } from "json_objects";
import { settingsIcon } from "svgs";
const { heading, description, projects } = startup;
export default function index() {
  return (
    <main className=" font-nunito flex flex-col items-center w-full">
      <section className="pt-36 pb-72 flex flex-col items-center justify-center w-full text-white bg-purple-800">
        <h1 className="mb-6 text-3xl font-bold">{heading}</h1>
        <p className="line max-w-3xl text-xl font-light leading-normal text-center">
          {description}
        </p>
      </section>

      <section className="max-w-7xl left-auto -mt-40">
        <section className=" grid items-stretch justify-center grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <article className="py-14 px-9 rounded-xl h-80 max-w-sm bg-white shadow-md">
              <figure className="text-center">
                <img src={project.logo} alt="" className="mx-auto mb-8" />
                <figcaption>
                  <p className=" mb-8 text-lg font-light">
                    {project.description}
                  </p>
                </figcaption>
                {project.link ? (
                  <a href={project.link} className="text-lg text-purple-800">
                    {project.link}
                  </a>
                ) : (
                  <figure className="flex items-center justify-center gap-3 cursor-not-allowed">
                    <p className="w-4 h-4 text-purple-800 opacity-50">
                      {settingsIcon}
                    </p>
                    <p className=" text-lg text-purple-800 opacity-50">
                      In development
                    </p>
                  </figure>
                )}
              </figure>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
