"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.volume = 0.3;
      audio.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(!muted);
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-4 px-5 py-3 bg-surface-container-lowest/95 backdrop-blur-md refined-border transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <audio ref={audioRef} src="/background-music.mp3" loop preload="none" />

      {/* Waveform bars */}
      <div className="flex items-end gap-[3px] h-4 w-8 shrink-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-[2px] rounded-none bg-secondary-fixed/60 origin-bottom transition-all duration-300 ${
              playing && !muted ? "audio-bar" : "h-[3px]"
            }`}
            style={{ animationDelay: `${i * 0.12}s` }}
          />
        ))}
      </div>

      <span className="font-label-caps text-[9px] text-on-surface-variant tracking-[0.25em] uppercase select-none">
        AMBIENT SCORE
      </span>

      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause music" : "Play ambient music"}
        className="text-on-surface-variant hover:text-secondary-fixed transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">
          {playing ? "pause" : "play_arrow"}
        </span>
      </button>

      {playing && (
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="text-on-surface-variant hover:text-secondary-fixed transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">
            {muted ? "volume_off" : "volume_up"}
          </span>
        </button>
      )}
    </div>
  );
}
