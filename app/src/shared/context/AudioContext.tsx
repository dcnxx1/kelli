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
  playSound?: () => Promise<void> | undefined;
  setAudioLink?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState: IAudioContext = {
  playSound: () => undefined,
  setAudioLink: () => undefined,
};

export const ContextAudio = createContext<IAudioContext>(defaultState);

export default function AudioContext({ children }: Props) {
  const [audioLink, setAudioLink] = useState("");
  const [playback, setPlayback] = useState<Sound>();
  const soundEmmiter = new Audio.Sound();

  async function playSound() {
    try {
      await soundEmmiter.loadAsync({
        uri: "https://kellibucket.s3.eu-central-1.amazonaws.com/5376ed54-2995-4760-b009-89fe4ffd3273.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJIMEYCIQCGeRF8OPlQTy4gfntoi96ZPfTjPcD4P4WQZZM5LIYDJgIhAJFgS2v2ttkStEhcRXDlvaAgT0yUVe83HhRQDDeCjs0oKooDCNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMOTQzOTY5NjU0MTgzIgw4ALxiwHyMleBYTGAq3gL1HjZu4Fwrmzo1bEmp7CqN1lF6UUlo9NLoCIkAOQraD3pJuASOyQ1aHHoWf20bIRIFcNLwrzdX3AVy%2FRZMdnd%2FrVNYkA3AXLYBOG8j3LIGzWHIZmVs7OV%2BtsWcHoaKhu2r2OsH%2B4UmYELG6am7LMuxGYK1D9i%2F1YBv0GpiqBWiu7ZJ1l4HukDE9Fmr11BDWW60YO2zBJA69WX9OxDjqB4OMHfab8KQKHQCcfNDJtyFqsK0zwgqlmPqj1rgWTzDTgMaLNNhCNqywhLcz1nSsuBjTmvMoeOoPM4UnXCQQkU2CK6KuR12Dlz1nixVFIOXY7gjrvlWuzMgzOqyG1dw38x6yx6eFeFsXPbr71pxZTtoowTS%2BcK3buXSRTfwhCNXIU7uPr7ge85S6RH46SnGLSFh9Dq8N1ph7JMhymOgj3XwjAUWWEGheNfqumbLGrvS2d90UUXoEl%2FfE9VAltRCvjDGuOChBjqyAuRdANtwaA2hCp7Xipi%2BP2SkxvjLfN3hgeZxPnHmHh%2B9D7ZVUCx3dsFV62ZuAiUX8WPguu6AKuI53wETltoGjLkBdVoqwdGvkoxgaaW4MuY1JNzLPHVtYKdRqD1eVFCXewx7S8UkLAoiyu5g4kx3ggCH7xZlEph2Yvhj6PTMMng5zd4a50ZiunIxhNIrM9UZthievfGUZJlqGpo4KoosX1mpg4aqqVOXQNG7pT0UD3haAGxLdviDLI%2B%2Fb6Z8l%2BOlyrK1qH4BV54zVHKfxoH2VL9s0wBHYq%2Fx6dtORCoQNTzinAUjwdkQLAzpJWvz72GJxtexkHVubtP9aSmahdZUoOHQdXDED%2BNtthswQCnevaaOgR7BtClNx%2FeUDu%2B5nhf7EH0LgLWXYa0A25SllC2CmhTIkA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230413T162625Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA5XSHZ2WT2DHWV5VP%2F20230413%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=4ad2d252900d8025964d389d9022e571bd50dd42d71b7130ceed8180bd96b15e",
      });
      await soundEmmiter.playAsync();
      //   setPlayback(sound);
      //   await playback?.playAsync();
    } catch (err) {
      console.log("err occured :>>", err);
    }
  }

  useEffect(() => {
    return playback
      ? () => {
          playback.unloadAsync();
        }
      : undefined;
  }, [playback]);

  return (
    <ContextAudio.Provider value={{ setAudioLink, playSound }}>
      {children}
    </ContextAudio.Provider>
  );
}
export const useAudio = () => {
  return useContext(ContextAudio);
};
