import { useEffect, useState } from "react";

export function useAudio(
  url: string
): [HTMLAudioElement | undefined, boolean, () => void] {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio(url) : undefined
  );
  const [audioPlaying, setAudioPlaying] = useState(false);

  const togglePlaying = () => setAudioPlaying(!audioPlaying);

  useEffect(() => {
    audioPlaying ? audio?.play() : audio?.pause();
  }, [audioPlaying]);

  useEffect(() => {
    audio?.addEventListener("ended", togglePlaying);

    return () => {
      audio?.removeEventListener("ended", togglePlaying);
    };
  }, []);

  return [audio, audioPlaying, togglePlaying];
}
