import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  desc: string;
  to: string;
  image: string;
}

export default function Project({ name, desc, to, image }: Props) {
  return (
    <Link href={to}>
      <div className="bg-white rounded-md w-[20rem] h-48 hover:scale-95 cursor-pointer px-2 py-3 flex flex-col items-center space-y-1">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-[100%]"
        />
        <div className="flex flex-col items-center">
          <p className="text-gray-900 text-lg font-semibold">{name}</p>
          <p className="text-lg text-black">{desc}</p>
        </div>
      </div>
    </Link>
  );
}
