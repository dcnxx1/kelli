import { View, StyleSheet, Image } from "react-native";
import { ReactNode } from "react";
import { theme } from "../../themes";
interface Props {
  children?: ReactNode;
}

export default function Frame({ children }: Props) {
  return <View style={FrameStyle.Frame}>{children}</View>;
}

const FrameStyle = StyleSheet.create({
  Frame: {
    padding: 10,
    borderWidth: 2,
    minWidth: '40%',
    minHeight: '20%',
    borderColor: theme.colors.kelliBlack,
    borderStyle: "dotted",
    borderRadius: 10,
    backgroundColor: theme.colors.kelliBrown,
  },
});
