import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Home } from "./src/screens";
import ModalContext from "./src/shared/context/ModalContext";

export default function App() {
  return (
    <View style={homeStyle.App}>
      <ModalContext>
        <Home />
      </ModalContext>
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
