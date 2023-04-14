import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from "expo-av";
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
    try {
    //  TODO: Ask permission and tell the user that microphone will NEVER be used.
      (await Audio.requestPermissionsAsync()).canAskAgain;
     
      await Audio.setAudioModeAsync({
        staysActiveInBackground: true,
        interruptionModeAndroid: InterruptionModeAndroid.DoNotMix,
        shouldDuckAndroid: false,
        playThroughEarpieceAndroid: false,
        allowsRecordingIOS: false,
        interruptionModeIOS: InterruptionModeIOS.DoNotMix,
        playsInSilentModeIOS: true,
      });
      const { sound } = await Audio.Sound.createAsync(
        { uri: speechUrl },
        { shouldPlay: true }
      );

      setSound(sound);

      await sound.playAsync();
    } catch (err) {}
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
