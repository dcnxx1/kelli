import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import {
  Character,
  Languages,
  SelectLanguage,
  SelectableCharacters,
} from "../../models/character";
import {
  Avatar,
  DisplayName,
  Frame,
  LanguageOptions,
  Input,
} from "../../shared/components";
import { theme } from "../../shared/themes";
const modifiedChars = [...SelectableCharacters];
import { useAudio } from "../../shared/context/AudioContext";
import { useRequest } from "../../shared/hooks";

export default function Home() {
  // STATIC DATA (ARRAYS)
  const [characterArray, setCharacterArray] =
    useState<Character[]>(modifiedChars);

  const [languageArray, setLanguageArray] =
    useState<SelectLanguage[]>(Languages);
  //  STATES
  const [language, setLanguage] = useState<SelectLanguage>(languageArray[0]);
  const [character, setCharacter] = useState<Character>(characterArray[0]);
  const [isOpenOptions, setOptions] = useState(false);
  const [input, setInput] = useState<string>("");
  const data = useRequest("generate/sampleAudio", "illias fietto");
  const audi = useAudio();
  // https://stackoverflow.com/a/67736829 for custom hook !
  
  const setLanguageCallback = useCallback(
    (selectLanguage: SelectLanguage) => {
      setLanguage(selectLanguage);
      setOptions(false);
    },
    [language, setLanguage]
  );
  useEffect(() => {}, []);
  const changeCharacter = useCallback((recievedCharacter: Character) => {
    if (character.voiceId !== recievedCharacter.voiceId) {
      setCharacter(recievedCharacter);
    }
  }, []);

  useEffect(() => {
    const characterPredicate = (char: Character) =>
      char.language === language?.flag;
    const filteredCharacters = modifiedChars.filter(characterPredicate);
    setCharacterArray(filteredCharacters);
  }, [language]);

  useEffect(() => {
    setCharacter(characterArray[0]);
  }, [characterArray]);

  return (
    <View style={ss.Homes}>
      <View style={ss.FrameContainer}>
        <Frame>
          <Avatar avatarKey={character && character.avatarKey} />
          <View style={ss.StyleOptions}>
            <LanguageOptions
              flag={character && character.language}
              languages={languageArray}
              language={language && language}
              setLanguage={setLanguageCallback}
              isOpen={isOpenOptions}
              setOptions={setOptions}
              country={character && character.language}
            />
            <DisplayName
              character={character}
              setCharacter={changeCharacter}
              characters={characterArray}
            >
              {!!character && character.characterName}
            </DisplayName>
          </View>
        </Frame>
      </View>
      <View style={ss.InputContainer}>
        <Input inputValue={input} changeInput={setInput} />
      </View>
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
  FrameContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    zIndex: 400,
  },

  InputContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    borderWidth: 2,
  },
});
