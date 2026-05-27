"use client";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // On mount: play muted (autoplay safe) OR unmuted if user came from splash
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;

    const alreadyEnabled = sessionStorage.getItem("audioEnabled") === "true";
    audio.muted = !alreadyEnabled;
    setMuted(!alreadyEnabled);

    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  }, []);

  // Listen for splash lang-selected event (synchronous user gesture chain)
  useEffect(() => {
    const onLangSelected = () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.muted = false;
      setMuted(false);
      if (audio.paused) {
        audio.play().then(() => setPlaying(true)).catch(() => {});
      } else {
        setPlaying(true);
      }
    };
    window.addEventListener("lang-selected", onLangSelected);
    return () => window.removeEventListener("lang-selected", onLangSelected);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const next = !muted;
    audio.muted = next;
    setMuted(next);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 px-5 py-3 bg-surface-container-lowest/95 backdrop-blur-md refined-border">
      <audio ref={audioRef} src="/background-music.mp3" loop preload="auto" />

      {/* Waveform bars */}
      <div className="flex items-end gap-0.75 h-4 w-8 shrink-0">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-0.5 rounded-none origin-bottom transition-all duration-300 ${
              playing && !muted ? "audio-bar" : "h-0.75 bg-secondary-fixed/40"
            }`}
            style={playing && !muted ? { animationDelay: `${i * 0.12}s` } : undefined}
          />
        ))}
      </div>

      <span className="font-label-caps text-[9px] text-on-surface-variant tracking-[0.25em] uppercase select-none">
        AMBIENT SCORE
      </span>

      {/* Muted: show pulsing UNMUTE prompt */}
      {playing && muted && (
        <button
          onClick={toggleMute}
          aria-label="Unmute ambient music"
          className="font-label-caps text-[9px] tracking-[0.15em] uppercase text-secondary-fixed hover:text-on-surface transition-colors cursor-pointer animate-pulse"
        >
          UNMUTE
        </button>
      )}

      {/* Play / Pause */}
      <button
        onClick={togglePlay}
        aria-label={playing ? "Pause" : "Play ambient music"}
        className="text-on-surface-variant hover:text-secondary-fixed transition-colors cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">
          {playing ? "pause" : "play_arrow"}
        </span>
      </button>

      {/* Volume when playing and unmuted */}
      {playing && !muted && (
        <button
          onClick={toggleMute}
          aria-label="Mute"
          className="text-on-surface-variant hover:text-secondary-fixed transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">volume_up</span>
        </button>
      )}
    </div>
  );
}
