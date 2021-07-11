import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonialsData } from "json_objects";

const responsive = {
  tablet: {
    breakpoint: { max: 9000, min: 0 },
    items: 1,
  },
};
export default function index() {
  const { heading, description, testimonials } = testimonialsData;
  return (
    <main className="py-36 font-nunito grid items-center justify-center px-6 text-center">
      <h1 className="text-blue-dark mb-6 text-3xl font-bold">{heading}</h1>
      <p className=" mb-6 text-xl font-light text-gray-600">{description}</p>

      <Carousel
        responsive={responsive}
        // centerMode={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        arrows={true}
        infinite={true}
        showDots={false}
        swipeable
        className="mt-14">
        {testimonials?.map((testimonial, index) => (
          <section className="">
            <img
              src={testimonial.client_img}
              alt=""
              className="w-24 h-24 m-auto rounded-full"
            />
            <p className=" max-w-2xl m-auto mt-8 mb-6 text-2xl font-light text-black">
              {testimonial.client_testimonial}
            </p>
            <p className=" mb-1 text-xl font-extrabold text-black">
              {testimonial.client_name}
            </p>
            <p className="text-sm font-light text-gray-600">
              {testimonial.client_designation}
            </p>
          </section>
        ))}
      </Carousel>
    </main>
  );
}
