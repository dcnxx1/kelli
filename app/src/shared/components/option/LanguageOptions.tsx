import { View, StyleSheet, Image, FlatList } from "react-native";

interface Props {
  isOpen?: boolean;
  flag?: string;
  country?: string;
}

export default function LanguageOptions({ isOpen, flag, country }: Props) {
  return isOpen ? (
    <View style={OptionStyle.styleIfOpen}></View>
  ) : (
    <View style={OptionStyle.styleIfClosed}></View>
  );
}

const OptionStyle = StyleSheet.create({
  styleIfOpen: {
    
  },

  styleIfClosed: {
    width: '10%',
    padding: 15,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red'
  },
});
