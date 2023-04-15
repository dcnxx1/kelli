import React, { useCallback, useEffect, useState } from "react";
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
} from "../../shared/components";
import { theme } from "../../shared/themes";
import SpeechAction from "../../shared/components/input/SpeechAction";
const modifiedChars = [...SelectableCharacters];

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


  const setLanguageCallback = useCallback(
    (selectLanguage: SelectLanguage) => {
      setLanguage(selectLanguage);
      setOptions(false);
    },
    [language, setLanguage]
  );

  const changeCharacter = useCallback(
    (recievedCharacter: Character) => {
      if (character.voiceId !== recievedCharacter.voiceId) {
        setCharacter(recievedCharacter);
      }
    },
    [character]
  );

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
      <View style={ss.SpeechContainer}>
        <SpeechAction character={character} />
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
  SpeechContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

});
