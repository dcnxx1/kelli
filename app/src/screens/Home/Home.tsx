import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Character,
  Languages,
  SelectLanguage,
  SelectableCharacters,
} from "../../models/character";
import {
  Character as Avatar,
  DisplayName,
  Frame,
  LanguageOptions,
} from "../../shared/components";
import { theme } from "../../shared/themes";

export default function Home() {
    // STATIC DATA (ARRAYS)
  const [characterArray, setCharaterArray] =useState<Character[]>(SelectableCharacters);
  const [languageArray, setLanguageArray] =useState<SelectLanguage[]>(Languages);
    //  STATES
  const [language, setLanguage] = useState<SelectLanguage>(languageArray[0]);
  const [character, setCharacter] = useState<Character>(characterArray[3]);
  const [isOpenOptions, setOptions] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);


  const getCharactersByCurrentFlag = () => {

  }

  return (
    <View style={ss.Homes}>
      <Frame>
        <Avatar avatarKey={character.avatarKey} />
        <View style={ss.StyleOptions}>
          <LanguageOptions
            flag={character.language}
            languages={languageArray}
            language={language}
            setLanguage={setLanguage}
            isOpen={isOpenOptions}
            setOptions={setOptions}
            country={character.language}
          />
          <DisplayName>{character.characterName}</DisplayName>
        </View>
      </Frame>
    </View>
  );
}

const ss = StyleSheet.create({
  Homes: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.kelliGold,
  },
  StyleOptions: {
    width: 100,
    flexDirection: "row",
    gap: 5,
  },
});
