import { View, StyleSheet, Text } from "react-native";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
export default function DisplayName({ children }: Props) {
  return (
    <View style={OptionStyle.Option}>
      <Text style={OptionStyle.NameText}>{children}</Text>
    </View>
  );
}

const OptionStyle = StyleSheet.create({
  Option: {
    width: 100,
    padding: 15,
    height: 10,
    borderRadius: 5,
    backgroundColor: "red",
  },

  NameText: {
    color: "green",
  },
});
