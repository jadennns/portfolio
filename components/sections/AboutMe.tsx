import Image from "next/image";
import { useState } from "react";
import Section from "./Section";

export default function AboutMe() {
  const [lang, setLang] = useState("ind");

  return (
    <Section name="About Me" id="about">
      <div className="flex items-center space-x-6">
        <Image
          src={"/Profile.jpg"}
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-md"
        />
        <div className="flex flex-col space-y-2 items-start">
          <p className="text-base text-white w-[50rem]">
            {lang == "ind"
              ? `Halo! Nama saya Jaden. Saya berasal dari Indonesia dan mimpi saya
            adalah menjadi programmer. Saya asal Medan, Sumatera Utara,
            Indonesia dan lahir tanggal 6 October 2007. Aku mulai menyukai
            programming awal tahun 2021 saat aku ingin membuat discord bot buat
            server teman saya. Lalu, aku sadar bahwa programming itu sangat seru
            dan saya ingin membuat karir dari programming. Sekarang saya sedang
            belajar react mengunakan typescript.`
              : `Hello! My name is Jaden. I come from Indonesia and my dream is to become a programmer. I'm from Medan, North Sumatra, Indonesia and born on October 6, 2007. I started liking programming in early 2021 when I wanted to make a discord bot for my friend's server. Then, I realized that programming is really fun and I want to make a career out of programming. Now I'm learning React using typescript.`}
          </p>
          <p
            className="text-base text-blue-400 hover:underline cursor-pointer"
            onClick={() => setLang(lang == "ind" ? "en" : "ind")}
          >
            Translate to {lang == "ind" ? "english" : "indonesian"}
          </p>
        </div>
      </div>
    </Section>
  );
}
