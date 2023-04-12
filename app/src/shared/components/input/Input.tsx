import {
  View,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import { theme } from "../../themes";
import Bucket from "../../images/actions/delete.png";
import {useState, useCallback, useRef, useMemo, memo} from 'react'
import useRequest from '../../hooks/useRequest';
let  rendered = 0


function Input() {
    const [input, setInput] = useState<string>('')

    const changeInput = useCallback((newText: string) => {
        setInput(newText)
    }, [setInput])
    
    return (
    <View style={InputStyle.Container}>
      <View style={InputStyle.InputContainer}>
        <TextInput
          value={input}
          onChangeText={newText => changeInput(newText)}
          placeholderTextColor={theme.colors.kelliGrey}
          placeholder="Say something to Kevin..."
          multiline
          blurOnSubmit={true}
          style={InputStyle.Input}
        />
        <Image style={InputStyle.Bucket} source={Bucket} />
      </View>
    </View>
  );
}

export default memo(Input)

const InputStyle = StyleSheet.create({
  Container: {
    flex: 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
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
