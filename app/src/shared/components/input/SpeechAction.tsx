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

interface PropsInput {
  character: Character;
}

type SubmitEvent = NativeSyntheticEvent<TextInputSubmitEditingEventData>;

export default function SpeechAction({ character }: PropsInput) {
  const [inputValue, setInputValue] = useState<string>("");

  // const onSubmitInput = (e: SubmitEvent) => {
  //   e.preventDefault();
  //   if (inputValue) {
  //     setInputValue()
  //   }
  // };

  const changeInputValue = (newText: string) => {
    setInputValue(newText);
  };

  return (
    <>
      <View style={InputStyle.InputContainer}>
        <TextInput
          value={inputValue}
          onChangeText={changeInputValue}
          placeholderTextColor={theme.colors.kelliGrey}
          placeholder="Say something to Kevin..."
          multiline
          blurOnSubmit={true}
          onSubmitEditing={(e) => {}}
          style={InputStyle.Input}
        />
        <Image style={InputStyle.Bucket} source={Bucket} />
      </View>

      <View style={InputStyle.ButtonContainer}>
      <Button
        submitInput={inputValue}
        voiceId={character.voiceId}
       />
      </View>
      
      </>
  );
}

const InputStyle = StyleSheet.create({
  Container: {
    width: '100%',
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
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  }
});
