import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens";
import AudioContext from "./src/shared/context/AudioContext";

export default function App() {
  return (
    <View style={homeStyle.App}>
      <AudioContext>
        <Home />
      </AudioContext>
      <StatusBar style="auto" />
    </View>
  );
}

const homeStyle = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
