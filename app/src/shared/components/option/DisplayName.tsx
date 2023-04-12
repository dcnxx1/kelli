import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import { ReactNode, useState, useCallback } from "react";
import Avatar from "../frame/Avatar";
import { theme } from "../../themes";
import DropDown from "../../images/actions/icondropdown.png";
import Modal from "../modal/Modal";
import { Character } from "../../../models/character";
import Frame from "../frame/Frame";
import Check from "../../images/actions/check.png";

interface Props {
  children?: ReactNode;
  characters: Character[];
  setCharacter: (character: Character) => void;
  character: Character;
}

export default function DisplayName({
  children,
  characters,
  setCharacter,
  character,
}: Props) {
  const [openSelection, setIsOpenSelected] = useState(false);

  const changeSelection = useCallback(() => {
    setIsOpenSelected(!openSelection);
  }, [openSelection]);

  return (
    <>
      <Pressable onPress={changeSelection} style={OptionStyle.Option}>
        <Text style={OptionStyle.NameText}>{children}</Text>
        <Image style={OptionStyle.dropDown} source={DropDown} />
      </Pressable>

      {openSelection && (
        <Modal hideModalFunction={changeSelection}>
          <View style={OptionModal.SelectionScreen}>
            <View style={OptionModal.ModalHeader}>
              <Text style={OptionModal.ModalHeaderText}>
                Select a character
              </Text>
            </View>
            <View style={OptionModal.FlatListContainer}>
              <FlatList
                data={characters}
                numColumns={2}
                keyExtractor={(character) => character.voiceId}
                contentContainerStyle={OptionModal.SeperatorHorizontal}
                ItemSeparatorComponent={() => (
                  <View style={OptionModal.Seperator} />
                )}
                renderItem={({ item }) => {
                  return (
                    <Pressable onPress={() => setCharacter(item)}>
                      <Frame>
                        {item.voiceId === character.voiceId && (
                          <Image
                            style={{ position: "absolute", right: 0 }}
                            source={Check}
                          />
                        )}
                        <Avatar avatarKey={item.avatarKey} />
                        <Text style={OptionModal.NameText}>
                          {item.characterName}
                        </Text>
                      </Frame>
                    </Pressable>
                  );
                }}
              />
            </View>
          </View>
        </Modal>
      )}
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
});

const OptionModal = StyleSheet.create({
  SelectionScreen: {
    width: "90%",
    height: "60%",
    backgroundColor: theme.colors.kelliBrown,
    alignSelf: "center",

    opacity: 1,
    borderRadius: 15,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: theme.colors.kelliBright,
    rowGap: 50,
  },
  ModalHeader: {
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 5,
    borderWidth: 2,
  },

  ModalHeaderText: {
    alignSelf: "center",
    fontSize: 20,
    paddingBottom: 5,
    borderBottomWidth: 2,
    marginHorizontal: 20,
  },
  CharacterListStyle: {
    borderWidth: 2,
    height: "100%",
    flex: 1,
    // padding: 10,
  },

  FlatListContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  Seperator: {
    height: 10,
  },

  SeperatorHorizontal: {
    marginHorizontal: 10,
    width: "100%",
  },

  NameText: {
    alignSelf: "center",
    fontSize: 15,
  },
});
