import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children?: ReactNode;
}

export interface IAudioContext {
  playSound: (speechUrl: string, textr: string) => Promise<void> | undefined;
  setAudioLink?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState: IAudioContext = {
  playSound: (speechUrl: string, textr: string) => undefined,
  setAudioLink: () => undefined,
};

const ContextAudio = createContext<IAudioContext>(defaultState);

export default function AudioContext({ children }: Props) {
  const [audioLink, setAudioLink] = useState("");
  const [sound, setSound] = useState<Sound>();

  async function playSound(speechUrl: string, textr: string) {
    const { sound } = await Audio.Sound.createAsync(
      { uri: speechUrl },
      { shouldPlay: true }
    );

    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ContextAudio.Provider value={{ setAudioLink, playSound }}>
      {children}
    </ContextAudio.Provider>
  );
}
export const useAudio = () => {
  return useContext(ContextAudio);
};
