import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useContext,
} from "react";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import snd from "../images/5376ed54-2995-4760-b009-89fe4ffd3273.mp3";
interface Props {
  children?: ReactNode;
}

export interface IAudioContext {
  playSound?: (snd: string) => Promise<void> | undefined;
  setAudioLink?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState: IAudioContext = {
  playSound: (snd: string) => undefined,
  setAudioLink: () => undefined,
};

export const ContextAudio = createContext<IAudioContext>(defaultState);

export default function AudioContext({ children }: Props) {
  const [audioLink, setAudioLink] = useState("");
  const [playback, setPlayback] = useState<Sound>();

  async function playSound(snd: string) {
    try {
      const { sound } = await Audio.Sound.createAsync({
        uri: snd,
      });
      await sound.playAsync();
    } catch (err) {
      console.log("err occured :>>", err);
    }
  }

  // useEffect(() => {
  //   return playback
  //     ? () => {
  //         playback.unloadAsync();
  //       }
  //     : undefined;
  // }, [playback]);

  return (
    <ContextAudio.Provider value={{ setAudioLink, playSound }}>
      {children}
    </ContextAudio.Provider>
  );
}
export const useAudio = () => {
  return useContext(ContextAudio);
};
