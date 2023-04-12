import { Image, StyleSheet } from "react-native";
import getAvatar from "../../utils/helpers";
interface Props {
  avatarKey?: string;
}

export default function Avatar({ avatarKey }: Props) {
  return <Image source={getAvatar(avatarKey)} style={ImageStyle.Image} />;
}

const ImageStyle = StyleSheet.create({
  Image: {
    // flex: 1,
    alignSelf: "center",
    // maxWidth: 150,
    aspectRatio: 1.1,
    // maxHeight: 150,
    padding: 10,
    resizeMode: "contain",
  },
});
