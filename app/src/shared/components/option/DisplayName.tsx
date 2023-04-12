import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { ReactNode, useState, useCallback, useContext } from "react";
import { theme } from "../../themes";
import DropDown from "../../images/actions/icondropdown.png";
import Modal from "../modal/Modal";

interface Props {
  children?: ReactNode;
}
export default function DisplayName({ children }: Props) {
  const [openSelection, setIsOpenSelected] = useState(false);

  const changeSelection = useCallback(() => {
    setIsOpenSelected(!openSelection);
  }, [openSelection]);


  return (<>
    <Pressable onPress={changeSelection} style={OptionStyle.Option}>
      <Text style={OptionStyle.NameText}>{children}</Text>
      <Image style={OptionStyle.dropDown} source={DropDown} />
    </Pressable>

    {openSelection &&
    (<Modal hideModalFunction={changeSelection}>
      <View style={OptionStyle.SelectionScreen}>
        
      </View>
    </Modal>)}
    </>
  );
}

const OptionStyle = StyleSheet.create({
  Option: {
    width: 100,
    borderRadius: 5,
    backgroundColor: theme.colors.kelliPurple,
    flexDirection: "row",
    maxHeight: 40,
    alignItems: "center",
    paddingHorizontal: 10,
    lineHeight: 2,
  },

  NameText: {
    color: "white",
    flex: 1,
    fontSize: 13,
  },
  dropDown: {
    resizeMode: "contain",
    width: 10,
    height: 10,
  },

  SelectionScreen: {
    width: '90%',
    height: '60%',
    backgroundColor: theme.colors.kelliBrown,
    alignSelf: 'center',
    opacity: 1,
    borderRadius: 15,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: theme.colors.kelliBright
  }
});
