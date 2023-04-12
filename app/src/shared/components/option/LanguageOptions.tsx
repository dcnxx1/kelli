import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  ViewStyle,
  PressableProps,
} from "react-native";
import { theme } from "../../themes";
import { getFlags } from "../../utils/helpers";
import DropDown from "../../images/actions/icondropdown.png";
import { useCallback } from "react";
import { SelectLanguage } from "../../../models/character";
import styled from "styled-components/native";
import React from "react";

interface Props {
  isOpen: boolean;
  setOptions: React.Dispatch<React.SetStateAction<boolean>>;
  flag?: string;
  setLanguage: (selectLanguage: SelectLanguage) => void;
  languages: SelectLanguage[];
  language?: SelectLanguage;
  country?: string;
}

type DropDown = {
  transform: ViewStyle;
  padding: ViewStyle;
};

export default function LanguageOptions({
  isOpen,
  setOptions,
  languages,
  language,
  setLanguage,
}: Props) {
  const changeOptions = useCallback(() => {
    setOptions(!isOpen);
  }, [isOpen]);

  return (
    <TouchableOpacity style={OptionStyle.styleOptions} onPress={changeOptions}>
      <Image
        style={OptionStyle.Image}
        source={!!language && getFlags(language.flag)}
      />
      {isOpen &&
        languages
          .filter((f) => language && f.flag !== language.flag)
          .map((flag) => (
            <Pressable key={flag.code} onPress={() => setLanguage(flag)}>
              <View style={OptionStyle.flagStyle}>
                <Image style={OptionStyle.Image} source={getFlags(flag.flag)} />
              </View>
            </Pressable>
          ))}
      <DropDownMenu isOpen={isOpen} onPress={changeOptions}>
        <Image style={[OptionStyle.DropDown]} source={DropDown} />
      </DropDownMenu>
    </TouchableOpacity>
  );
}

const OptionStyle = StyleSheet.create({
  flagStyle: {
    paddingVertical: 2,
  },
  styleOptions: {
    paddingHorizontal: 5,
    maxWidth: "40%",
    borderRadius: 5,
    backgroundColor: theme.colors.kelliPurple,
    zIndex: 5000,
  },
  Image: {
    maxWidth: "100%",
    width: 40,
    height: 30,
    zIndex: 5000,
  },
  DropDown: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 10,
    height: 10,
    zIndex: 5000,
  },
});

const DropDownMenu = styled(Pressable)<{ isOpen: boolean }>`
  // ^^ https://stackoverflow.com/a/66170576 Thank you! ^^ 
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  padding-top: ${({ isOpen }) => (isOpen ? "10px" : "0px")};
`;
