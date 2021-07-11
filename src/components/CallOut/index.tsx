import { callOutData } from "json_objects";
const { title, description, buttonText } = callOutData;
export default function index() {
  return (
    <main className="py-36 font-nunito grid items-center justify-center px-6 text-center">
      <h2 className="text-blue-dark mb-6 text-2xl font-bold">{title}</h2>
      <p className=" mb-6 text-xl font-light text-gray-600">{description}</p>
      <button className="hover:bg-purple-600 hover:text-white flex items-center gap-2 px-4 py-2 mx-auto mt-8 text-xl text-purple-600 transition-all duration-300 ease-in-out border-2 border-purple-600 rounded-full">
        <span>{buttonText}</span>
      </button>
    </main>
  );
}
