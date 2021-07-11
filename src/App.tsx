import {
  Intro,
  Navbar,
  Hero,
  RecentWork,
  Collaboration,
  StartupProjects,
  CallOut,
  Testimonials,
} from "components";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <RecentWork />
      <hr />
      <Collaboration />
      <StartupProjects />
      <CallOut />
      <hr />
      <Testimonials />
    </>
  );
}
