import { DesignerIcon, FrontEndIcon, MentorIcon } from "svgs";

export default function AboutMe() {
  return (
    <main className=" font-nunito rounded-xl grid grid-cols-3 text-center bg-white shadow-2xl">
      <section className="px-11 flex flex-col items-center justify-start py-16">
        <figure className="mb-8">{DesignerIcon}</figure>
        <h2 className="my-6 text-2xl font-bold">Designer</h2>
        <p className="h-20 text-lg font-light">
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Things I enjoy designing:
          </h6>
          <p className="text-lg font-light">UX, UI, Web, Mobile, Apps, Logos</p>
        </article>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Design Tools:
          </h6>
          <ul className="text-lg font-light">
            <li>Balsamiq Mockups</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Marvel</li>
            <li>Pen & Paper</li>
            <li>Sketch</li>
            <li>Webflow</li>
            <li>Zeplin</li>
          </ul>
        </article>
      </section>
      <section className="px-11 flex flex-col items-center justify-start py-16 border">
        <figure className="mb-8">{FrontEndIcon}</figure>
        <h2 className="my-6 text-2xl font-bold">Front-end Developer</h2>
        <p className="h-20 text-lg font-light">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Languages I speak:
          </h6>
          <p className="text-lg font-light">HTML, Pug, Slim, CSS, Sass, Less</p>
        </article>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Dev Tools:
          </h6>
          <ul className="text-lg font-light">
            <li>Atom</li>
            <li>Bitbucket</li>
            <li>Bootstrap</li>
            <li>Bulma</li>
            <li>Codekit</li>
            <li>Codepen</li>
            <li>Github</li>
            <li>Gitlab</li>
            <li>Terminal</li>
          </ul>
        </article>
      </section>
      <section className="px-11 flex flex-col items-center justify-start py-16">
        <figure className="mb-8">{MentorIcon}</figure>
        <h2 className="my-6 text-2xl font-bold">Front-end Developer</h2>
        <p className="h-20 text-lg font-light">
          I genuinely care about people, and love helping fellow designers work
          on their craft.
        </p>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Experiences I draw from:
          </h6>
          <p className="text-lg font-light">
            UX/UI, Product design, Freelancing
          </p>
        </article>
        <article className=" mt-12">
          <h6 className="mb-2 text-lg font-normal text-purple-800">
            Mentor Stats:
          </h6>
          <ul className="text-lg font-light">
            <li>5 years experience</li>
            <li>26 short courses</li>
            <li>42 bootcamps</li>
            <li>125+ students</li>
            <li>1,400+ mentor sessions</li>
            <li>60+ group critiques</li>
            <li>12,000+ comments</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
