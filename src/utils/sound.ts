import { useEffect, useRef, useState } from 'react';

export const useAudioPlayer = (src: string, initialLoop: boolean = false) => {

  // SV: This is used to verify is the component is in clientSide
  const [isMounted, setIsMounted] = useState(false);
  // Sv: AudioRef is used for store audio
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const initializeAudio = () => {
    if (!audioRef.current && isMounted) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = initialLoop;
    }
  };

  const play = () => {
    initializeAudio();
    audioRef.current?.play().catch();
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const setLoop = (loop: boolean) => {
    if (audioRef.current) {
      audioRef.current.loop = loop;
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return {
    play,
    pause,
    stop,
    setLoop,
    setVolume,
  };
};