import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  name: string;
  id: string;
}

export default function Section({ children, name, id }: Props) {
  return (
    <section className="flex flex-col items-center space-y-4" id={id}>
      <div className="flex flex-col items-center space-y-2">
        <h1 className="font-semibold text-2xl text-white">{name}</h1>
        <div className="border border-white w-[50rem]" />
      </div>
      {children}
    </section>
  );
}
