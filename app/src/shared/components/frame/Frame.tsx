import { View, StyleSheet, Image } from "react-native";

interface Props {
  avatarKey: string;
}

export default function Frame({ avatarKey }: Props) {
  return (
    <View style={FrameStyle.Frame}>
      <Image
        style={FrameStyle.Image}
        source={require(`../../images/characters/${avatarKey}`)}
      />
    </View>
  );
}

const FrameStyle = StyleSheet.create({
  Frame: {},
  Image: {},
});
