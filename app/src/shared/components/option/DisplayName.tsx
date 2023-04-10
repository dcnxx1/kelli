import { View, StyleSheet, Text } from "react-native";
import { ReactNode } from "react";
import { theme } from "../../themes";
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
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.kelliPurple
  },

  NameText: {
    color:'white',
    fontSize: 13
  },
});
