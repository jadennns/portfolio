import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "Oonye Kebayoran",
    description: "Pisang Goreng Kriuk & Es Kopi",
    url: "https://oonye-kebayoran.vercel.app/",
    image: "/webshots/Oonye.png",
  },
  {
    name: "Bloory",
    description:
      "Bloory adalah aplikasi chatting dimana kalian bisa ngobrol dengan teman teman mu dari mana pun.",
    url: "https://bloory.netlify.app/",
    image: "/webshots/Bloory.png",
  },
  {
    name: "Shortl",
    description: "Shortl, make your url more short!",
    url: "https://shortll.netlify.app/",
    image: "/webshots/Shortl.png",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex flex-col space-y-4">
        <h1 className="text-white text-3xl font-bold">Projects</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link href={project.url} key={index + 1}>
              <div className="w-[23rem] lg:w-[23rem] h-[16rem] bg-main-4 rounded-md flex flex-col space-y-2 cursor-pointer trans-grow">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={200}
                  height={150}
                  className="rounded-t-md"
                />
                <div className="px-2">
                  <p className="text-xl font-bold text-gray-200">
                    {project.name}
                  </p>
                  <p className="text-sm text-main-1 font-semibold">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
