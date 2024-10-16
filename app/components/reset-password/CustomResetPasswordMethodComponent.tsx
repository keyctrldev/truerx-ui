import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  TextStyle,
  ImageStyle,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

interface CustomResetPasswordMethodComponentProps {
  isSelected: boolean;
  onSelectMethod: () => void;
  icon: ImageSourcePropType;
  iconStyle?: ImageStyle;
  title: string;
  subTitle?: string;
  titleTextStyle?: TextStyle;
  subTitleTextStyle?: TextStyle;
}

const CustomResetPasswordMethodComponent = (props: CustomResetPasswordMethodComponentProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.btnContainer, props.style, props.isSelected && styles.activeContainer]}
      onPress={props.onSelectMethod}>
      <View style={styles.rowContainer}>
        <Image source={props.icon} style={[styles.iconStyle, props.iconStyle]} />
        <Text style={[styles.titleTextStyle, props.titleTextStyle]}>{props.title}</Text>
      </View>
      {props.subTitle && <Text style={[styles.subTitleTextStyle, props.subTitleTextStyle]}>{props.subTitle}</Text>}
    </TouchableOpacity>
  );
};

export default memo(CustomResetPasswordMethodComponent);

const styles = StyleSheet.create({
  btnContainer: {
    padding: horizontalScale(20),
    backgroundColor: Colors.white,
    borderWidth: horizontalScale(2),
    borderColor: Colors.overlayDark,
    borderRadius: horizontalScale(8),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    resizeMode: 'contain',
  },
  titleTextStyle: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    paddingLeft: horizontalScale(20),
    flex: 1,
  },
  subTitleTextStyle: {
    paddingHorizontal: horizontalScale(45),
    paddingVertical: verticalScale(6),
    fontSize: moderateScale(14),
    color: Colors.lightBlack,
  },
  activeContainer: {
    borderColor: Colors.primary,
    borderWidth: horizontalScale(2),
  },
});
