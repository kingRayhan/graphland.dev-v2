declare global {
  interface Window {
    // Safari legacy prefixed AudioContext
    webkitAudioContext?: {
      new (): AudioContext;
    };
  }
}

const createAudioContext = (): AudioContext | null => {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || window.webkitAudioContext;
  if (!Ctor) return null;
  try {
    return new Ctor();
  } catch {
    return null;
  }
};

export const playHoverSound = () => {
  try {
    // Create a subtle hover sound using Web Audio API
    const audioContext = createAudioContext();
    if (!audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Soft, subtle hover sound
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      1000,
      audioContext.currentTime + 0.1
    );

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.02,
      audioContext.currentTime + 0.01
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.1
    );

    oscillator.type = "sine";
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  } catch (error) {
    // Silently fail if audio context isn't supported
    console.debug("Audio not supported:", error);
  }
};

export const playClickSound = () => {
  try {
    // Create a more pronounced click sound
    const audioContext = createAudioContext();
    if (!audioContext) return;
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Sharp, satisfying click sound
    oscillator.frequency.setValueAtTime(1200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(
      400,
      audioContext.currentTime + 0.15
    );

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(
      0.05,
      audioContext.currentTime + 0.01
    );
    gainNode.gain.exponentialRampToValueAtTime(
      0.001,
      audioContext.currentTime + 0.15
    );

    oscillator.type = "triangle";
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  } catch (error) {
    // Silently fail if audio context isn't supported
    console.debug("Audio not supported:", error);
  }
};

// Debounce hover sounds to prevent audio spam
let hoverTimeout: NodeJS.Timeout | null = null;

export const playHoverSoundDebounced = () => {
  if (hoverTimeout) return;

  playHoverSound();
  hoverTimeout = setTimeout(() => {
    hoverTimeout = null;
  }, 50); // 50ms debounce
};
