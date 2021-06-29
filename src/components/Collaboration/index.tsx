import { collaborationData } from "json_objects";
export default function index() {
  const { heading, collaborations } = collaborationData;
  return (
    <main className="py-36 font-nunito grid items-center justify-center px-6 text-center">
      <h1 className="text-blue-dark mb-6 text-3xl font-bold">{heading}</h1>
      <section className="flex items-center justify-center gap-16 pt-12">
        {collaborations.map((data, index) => (
          <img src={data.src} alt={data.src} key={index + data.src} />
        ))}
      </section>
    </main>
  );
}
