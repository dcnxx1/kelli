import { Image, StyleSheet } from "react-native";
import getAvatar from "../../utils/helpers";
interface Props {
  avatarKey: string;
}

export default function Character({ avatarKey }: Props) {
  return <Image source={getAvatar(avatarKey)} style={ImageStyle.Image} />;
}

const ImageStyle = StyleSheet.create({
  Image: {
    alignSelf: "center",
    maxWidth: "90%",
    maxHeight: "90%",
    padding: 10,
  },
});
