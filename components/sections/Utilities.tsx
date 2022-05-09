import Util from "../lib/Util";
import Section from "./Section";

export default function Utilities() {
  return (
    <Section name="Utilities" id="util">
      <div className="grid grid-cols-3 gap-4">
        <Util
          name="Next.JS"
          desc="Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed."
          image="/util/NextJS.png"
          to="https://nextjs.org/"
        />
        <Util
          name="Tailwindcss"
          desc="A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup."
          image="/util/tailwindcss.png"
          to="https://tailwindcss.com/"
        />
        <Util
          name="MongoDB"
          desc="Get your ideas to market faster with an application data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love."
          image="/util/mongodb.png"
          to="https://mongodb.com/"
        />
        <Util
          name="Axios"
          desc="Axios is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface."
          image="/util/axios.ico"
          to="https://http-axios.com/"
        />
        <Util
          name="Sharp"
          desc="High performance Node.js image processing, the fastest module to resize JPEG, PNG, WebP, AVIF and TIFF images. Uses the libvips library."
          image="/util/sharp.png"
          to="https://sharp.pixelplumbing.com/"
        />
        <Util
          name="Visual Studio Code"
          desc="Visual Studio Code combines the simplicity of a source code editor with powerful developer tooling, like IntelliSense code completion and debugging."
          image="/util/vscode.png"
          to="https://code.visualstudio.com/"
        />
      </div>
    </Section>
  );
}
