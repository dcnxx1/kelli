import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../shared/themes";
import {
  Frame,
  Character as Avatar,
  LanguageOptions,
  DisplayName,
} from "../../shared/components";
import { Character } from "../../models/character";

export default function Home() {
  const [language, setLanguage] = useState();
  const [character, setCharacter] = useState<Character>();
  const [isOpenOptions, setOptions] = useState(false);

  return (
    <View style={ss.Homes}>
      <Frame>
        <Avatar />
        <View style={ss.StyleOptions}>
          <LanguageOptions />
          <DisplayName>Lotte</DisplayName>
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
  },
});
