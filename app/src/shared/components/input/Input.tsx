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
import { useCallback, useState, useEffect, useMemo } from "react";
import { useRequest } from "../../hooks";
interface PropsInput {
  inputValue: string;
  changeInput: (newText: string) => void;
}

type SubmitEvent = NativeSyntheticEvent<TextInputSubmitEditingEventData>;

export default function Input({ inputValue, changeInput }: PropsInput) {
  const [submitInput, setSubmitInput] = useState<string>("");

  const data = useRequest(`generated/${submitInput}`, submitInput);

  const onSubmitInput = useCallback(
    (e: SubmitEvent) => {
      e.preventDefault();
      if (inputValue) {
        setSubmitInput(inputValue);
      }
    },
    [inputValue]
  );

  useEffect(() => {
    if (!inputValue) {
      return;
    }
  }, [submitInput]);

  return (
    <View style={InputStyle.InputContainer}>
      <TextInput
        value={inputValue}
        onChangeText={(newText) => changeInput(newText)}
        placeholderTextColor={theme.colors.kelliGrey}
        placeholder="Say something to Kevin..."
        multiline
        blurOnSubmit={true}
        onSubmitEditing={(e) => onSubmitInput(e)}
        style={InputStyle.Input}
      />
      <Image style={InputStyle.Bucket} source={Bucket} />
    </View>
  );
}

const InputStyle = StyleSheet.create({
  InputContainer: {
    backgroundColor: theme.colors.kelliBrown,
    minHeight: 50,
    maxHeight: 150,
    padding: 10,
    width: "70%",
    height: "40%",
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
});
