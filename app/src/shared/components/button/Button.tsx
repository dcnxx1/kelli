import {
  Pressable,
  Image,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import PlayIcon from "../../images/actions/playicon.png";
import { theme } from "../../themes";
import { useRequest } from "../../hooks";
import { useCallback } from "react";
import { useAudio } from "../../context/AudioContext";

interface ButtonProps {
  submitInput: string;
  voiceId: string;
  setSubmitInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Button({
  submitInput,
  voiceId,
  setSubmitInput,
}: ButtonProps) {
  const audio = useAudio();

  const data = useRequest("/generate", { voiceId, text: submitInput }, [
    setSubmitInput,
    submitInput,
  ]);
// TODO: playAudio doesnt play because its initialized before the request is made. ^^ fix
  const playAudio = () => {
    setSubmitInput((prevValue) => !prevValue);
    if (data.setData.response) {
      const speechUrlLink = data.setData.response;
      console.log("speech url :>>", speechUrlLink);
      if (audio) {
        if (submitInput.length) {
      
          audio.playSound(speechUrlLink);
        }
      }
    }
  }

  return (
    <Pressable onPress={playAudio} style={ButtonStyle.Container}>
      <Image style={ButtonStyle.Image} source={PlayIcon} />
    </Pressable>
  );
}

const ButtonStyle = StyleSheet.create({
  Container: {
    backgroundColor: theme.colors.kelliBrown,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100 / 2,
    width: 100,
    height: 100,
  },
  Image: {
    padding: 15,
    margin: 15,
    resizeMode: "contain",
  },
});
