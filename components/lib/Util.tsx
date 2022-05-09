import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  image: string;
  desc: string;
  to: string;
}

export default function Util({ name, image, desc, to }: Props) {
  return (
    <Link href={to}>
      <div className="bg-white hover:scale-95 cursor-pointer rounded-md w-[25rem] px-2 py-2">
        <div className="flex flex-col space-y-1 items-start">
          <div className="flex items-center space-x-3">
            <Image src={image} alt={name} width={32} height={32} />
            <p className="text-lg text-gray-800 font-semibold">{name}</p>
          </div>
          <p className="text-base text-black">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
