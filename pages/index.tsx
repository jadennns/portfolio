import AboutMe from "../components/sections/AboutMe";
import Donate from "../components/sections/Donate";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Socials from "../components/sections/Socials";
import Utilities from "../components/sections/Utilities";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-14">
      <div className="flex flex-col space-y-10 items-start">
        <div className="flex flex-col space-y-[5rem]">
          <Landing />
          <AboutMe />
          <Utilities />
          <Projects />
          <Socials />
          <Donate />
        </div>
        <Footer />
        <br />
      </div>
    </div>
  );
}
