import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens";

export default function App() {
  return (
    <View style={homeStyle.App}>
      <Home />
      <StatusBar style="dark" />
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
