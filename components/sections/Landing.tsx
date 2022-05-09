import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-1">
        <Image
          src={"/Profile.jpg"}
          alt="Profile Picture"
          width={128}
          height={128}
          className="rounded-full"
        />
        <h1 className="text-white text-4xl">Jadennns Portfolio</h1>
      </div>
      <div className="flex items-center space-x-2">
        <a href="#about">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-semibold">
            About Me
          </button>
        </a>
        <a href="#util">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-semibold">
            Utilities
          </button>
        </a>
        <a href="#projects">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-semibold">
            Projects
          </button>
        </a>
        <a href="#socials">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-semibold">
            Socials
          </button>
        </a>
        <a href="#donasi">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 font-semibold">
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}
