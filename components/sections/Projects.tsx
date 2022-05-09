import Project from "../lib/Project";
import Section from "./Section";

export default function Projects() {
  return (
    <Section name="Projects" id="projects">
      <div className="grid grid-cols-3 gap-4">
        <Project
          name="Shortl"
          desc="Shortl, make your url more short!"
          to="https://shortll.netlify.app/"
          image="/projects/Shortl.png"
        />
        <Project
          name="Covid-19 Country Stats"
          desc="A react app where you can hover over countries and check their covid-19 stats"
          to="https://jadennns-covid19-country.netlify.app/"
          image="/projects/Covid19Country.png"
        />
      </div>
    </Section>
  );
}
