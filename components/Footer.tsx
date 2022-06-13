import Image from "next/image";
import { useAudio } from "../lib/useAudio";

export default function Footer() {
  const [audio, isPlaying, setPlaying] = useAudio("/audios/TomScream.mp3");

  return (
    <footer>
      <div className="bg-main-4">
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-x-0 space-y-4 p-4 lg:flex-row lg:space-x-72 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <Image
                src={"/Profile.png"}
                alt="My profile picture"
                width={128}
                height={128}
                onClick={setPlaying}
              />
              <div className="flex flex-col -space-y-1">
                <h2 className="font-montserrat text-2xl font-bold text-gray-100">
                  JADENNNS
                </h2>
                <span className="text-md text-gray-300">
                  Copyright © {new Date().getFullYear()} Jadennns
                </span>
                <span data-ccpa-link="1"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
