import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import AppText from "../app-text/AppText";
import styles from "./CustomButtonStyle";

interface CustomButtonPropType {
  title: string;
  customStyle?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({
  title,
  customStyle,
  onPress,
  disabled,
}: CustomButtonPropType) => {
  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      onPress={onPress}
      activeOpacity={0.6}
      disabled={disabled}
    >
      <AppText style={styles.label}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default CustomButton;
