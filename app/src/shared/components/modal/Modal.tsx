import {
  StyleSheet,
  Modal as SelectionModal,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
  hideModalFunction: () => void;
}

export default function Modal({ children, hideModalFunction }: ModalProps) {
  return (
    <SelectionModal
      onTouchStart={() => console.log("YOEHOE")}
      statusBarTranslucent={true}
      presentationStyle="overFullScreen"
      transparent
      animationType="fade"
    >
      <Pressable onPress={() => hideModalFunction()} style={ModalStyle.Modal}>
        <TouchableWithoutFeedback>{children}</TouchableWithoutFeedback>
      </Pressable>
    </SelectionModal>
  );
}

const ModalStyle = StyleSheet.create({
  Modal: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, .5)",
    justifyContent: "center",
    alignContent: "center",
  },
});
