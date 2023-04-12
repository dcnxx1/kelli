import { View, StyleSheet, Modal as SelectionModal } from "react-native";
import { theme } from "../../themes";
import { ReactNode } from "react";

interface ModalProps {
  children?: ReactNode;
}
export default function Modal({ children } : ModalProps) {
  return (
    <SelectionModal
      statusBarTranslucent={true}
      presentationStyle="overFullScreen"
      transparent
      animationType="fade"
    >
      <View style={ModalStyle.Modal}>
        {children}
      </View>
    </SelectionModal>
  );
}

const ModalStyle = StyleSheet.create({
  Modal: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.kelliBlack,
    justifyContent: "center",
    alignContent: "center",
    opacity: 0.8,
  },
});
