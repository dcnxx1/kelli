import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SWRConfigFactory } from "./src/config";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SWRConfigFactory>
      <Home />
    </SWRConfigFactory>
  );
}
