import { useState } from "react";
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import Bucket from "../../images/actions/delete.png";
import { theme } from "../../themes";
import { Character } from "../../../models/character";
import Button from "../button/Button";
import { useEffect } from "react";
import { useRequest } from "../../hooks";
import { useAudio } from "../../context/AudioContext";

interface PropsInput {
  character: Character;
}

type SubmitEvent = NativeSyntheticEvent<TextInputSubmitEditingEventData>;

export default function SpeechAction({ character }: PropsInput) {
  const [inputValue, setInputValue] = useState<string>("");
  const [submitInput, setSubmitInput] = useState("");
  const [setterSubmitValue, setSetterSubmitValue] = useState(false);

  const data = useRequest(
    "generate",
    { voiceId: character.voiceId, text: submitInput },
    [submitInput]
  );
  const audio = useAudio();

  const onSubmitInput = (e: SubmitEvent) => {
    e.preventDefault();
    if (inputValue) {
      setSubmitInput(inputValue);
    } else {
      setSubmitInput("");
    }
  };

  useEffect(() => {
    if (inputValue.length == 0) {
      setSubmitInput("");
    }
  }, [inputValue]);

  useEffect(() => {
    setInputValue("");
    setSubmitInput("");
  }, [character]);

  const changeInputValue = (newText: string) => {
    setInputValue(newText);
  };

  useEffect(() => {
    setSubmitInput(inputValue);
  }, [setterSubmitValue]);
  
  useEffect(() => {
    if (!submitInput.length) {
      return;
    }

    if (data.setData.response) {
      const speechUrlLink = data.setData.response;
      if (audio) {
        audio.playSound(speechUrlLink, "lazl");
      }
    }
  }, [data.setData.response]);

  return (
    <>
      <View style={InputStyle.InputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={changeInputValue}
          placeholderTextColor={theme.colors.kelliBright}
          placeholder="Say something to Kevin..."
          multiline
          blurOnSubmit={true}
          onSubmitEditing={onSubmitInput}
          style={InputStyle.Input}
        />
        <Image style={InputStyle.Bucket} source={Bucket} />
      </View>

      <View style={InputStyle.ButtonContainer}>
        <Button
          setSubmitInput={setSetterSubmitValue}
          submitInput={submitInput}
          voiceId={character.voiceId}
        />
      </View>
    </>
  );
}

const InputStyle = StyleSheet.create({
  Container: {
    width: "100%",
    flex: 1,
  },
  InputContainer: {
    backgroundColor: theme.colors.kelliBrown,
    minHeight: 50,
    maxHeight: 200,
    padding: 10,
    width: "70%",
    height: "100%",
    borderRadius: 15,
    flexDirection: "row",
  },

  Input: {
    textAlignVertical: "top",
    borderRadius: 15,
    backgroundColor: theme.colors.kelliBrown,
    color: theme.colors.kelliBlack,
    height: "100%",
    flex: 1,
  },
  Bucket: {
    resizeMode: "contain",
    width: 25,
    height: 25,
  },
  ButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
