import AboutMe from "../components/sections/AboutMe";
import Donate from "../components/sections/Donate";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Utilities from "../components/sections/Utilities";

export default function Home() {
  return (
    <div className="flex flex-col space-y-[5rem] items-center justify-center mt-14">
      <Landing />
      <AboutMe />
      <Utilities />
      <Projects />
      <Donate />
      <br />
    </div>
  );
}
