import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import useDetect from "../../lib/detectMobile";
import { useAudio } from "../../lib/useAudio";

export default function Me() {
  const isMobile = useDetect();
  const [idLang, setIdLang] = useState(true);

  const [audio, playing, togglePlaying] = useAudio("/audios/TomScream.mp3");

  return (
    <section id="about">
      <div
        className={clsx(
          isMobile
            ? "flex flex-col items-center space-y-6"
            : "flex items-center space-x-10",
          "animate-in slide-in-from-top-full duration-1000"
        )}
      >
        <Image
          src={"/Profile.png"}
          alt="My profile picture"
          width={200}
          height={200}
          onClick={togglePlaying}
          className="cursor-pointer"
        />
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <h2 className="text-white font-bold text-xl">
            Jaden Simanjuntak || Jadennns
          </h2>
          <p className="text-gray-200 w-[20rem] lg:w-[40rem]">
            {idLang
              ? "Halo! Nama saya Jaden. Saya berasal dari Indonesia dan mimpi saya adalah menjadi programmer. Saya asal Medan, Sumatera Utara, Indonesia dan lahir tanggal 6 October 2007. Aku mulai menyukai programming awal tahun 2021 saat aku ingin membuat discord bot buat server teman saya. Lalu, aku sadar bahwa programming itu sangat seru dan saya ingin membuat karir dari programming. Sekarang saya sedang belajar react mengunakan typescript."
              : "Hello! My name is Jaden. I come from Indonesia and my dream is to become a programmer. I'm from Medan, North Sumatra, Indonesia and born on October 6, 2007. I started liking programming in early 2021 when I wanted to make a discord bot for my friend's server. Then, I realized that programming is really fun and I want to make a career out of programming. Now I'm learning React using typescript."}
          </p>
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center space-x-2 bg-main-3 hover:bg-main-4 rounded-md p-2 text-gray-100"
              onClick={() => setIdLang(true)}
            >
              <Image
                src={"/flags/ID_FLAG.png"}
                alt="Indonesia Flag"
                width={30}
                height={20}
              />{" "}
              <p>Bahasa Indonesia</p>
            </button>
            <button
              className="flex items-center space-x-2 bg-main-3 hover:bg-main-4 rounded-md p-2 text-gray-100"
              onClick={() => setIdLang(false)}
            >
              <Image
                src={"/flags/US_FLAG.png"}
                alt="United States Flag"
                width={30}
                height={20}
              />{" "}
              <p>English</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
