import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import useRequest from "./src/data/useRequest";
import axios from "axios";

export default function App() {
  console.log("parent renders")
  // const data = useRequest("/");

  return (
    <View style={styles.container}>
      <Text>
        {/* {data.setData.isLoading ? "isLoading now.." : data.setData.response} */}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
