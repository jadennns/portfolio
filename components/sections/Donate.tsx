import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

export default function Donate() {
  return (
    <Section name="Donasi" id="donasi">
      <br />
      <Link href={"https://saweria.co/jadennns"}>
        <Image
          src={"/Saweria.png"}
          alt="Saweria Donasi"
          width={300}
          height={100}
          className="cursor-pointer"
        />
      </Link>
    </Section>
  );
}
