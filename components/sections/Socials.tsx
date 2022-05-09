import Section from "./Section";
import { AiFillGithub } from "react-icons/ai";
import { FaYahoo } from "react-icons/fa";
import Link from "next/link";

export default function Socials() {
  return (
    <Section name="Socials" id="socials">
      <div className="flex items-center space-x-2">
        <Link href={"https://github.com/jadennns"}>
          <button className="text-white font-semibold bg-[#333] hover:bg-[#334] rounded-md px-4 py-2 flex items-center space-x-2">
            <AiFillGithub />
            <p>Github</p>
          </button>
        </Link>
        <Link href={"mailto:jadennns@yahoo.com"}>
          <button className="text-white font-semibold bg-[#410093] hover:bg-[#410099] rounded-md px-4 py-2 flex items-center space-x-2">
            <FaYahoo /> <p>Yahoo</p>
          </button>
        </Link>
      </div>
    </Section>
  );
}
