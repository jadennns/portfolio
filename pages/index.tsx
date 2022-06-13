import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactMe from "../components/Sections/ContactMe";
import Me from "../components/Sections/Me";
import Projects from "../components/Sections/Projects";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-32 lg:mt-36">
        <Me />
        <div className="mt-60 lg:mt-72">
          <Projects />
        </div>
        <div className="mt-60 lg:mt-72">
          <ContactMe />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
