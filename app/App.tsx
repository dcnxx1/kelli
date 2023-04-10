import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useRequest } from "./src/shared/hooks";
import { Home } from "./src/screens";

export default function App() {
  console.log("parent renders")
  // const data = useRequest("/");

  return (
    <View style={homeStyle.App}>
      <Home />
      <StatusBar style="auto" />
    </View>
  );
}

const homeStyle = StyleSheet.create({
    App: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
})

