import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../shared/themes";
import { Frame, Character as Avatar } from "../../shared/components";
import { Character } from "../../models/character";
import LanguageOptions from '../../shared/components/option/LangaugeOptions';

export default function Home() {
  const [language, setLanguage] = useState();
  const [character, setCharacter] = useState<Character>();
  const [isOpenOptions, setOptions] = useState(false)
  return (
    <View style={ss.Homes}>
      <Frame>
        <Avatar />
        
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
});
