import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { styles } from './CustomTabIconStyle';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import AppText from '../app-text/AppText';
import { Colors } from '../../theme';
import { mixpanelTrackEvents } from '../../utils';
import { mixPanelEventsKeys } from '../../constants';

interface CustomTabIconType {
  focused: boolean;
  label: string;
  icon: ImageSourcePropType;
}

const CustomTabIcon: FC<CustomTabIconType> = ({ focused, label, icon }) => {
  const navigation = useNavigation<BottomTabNavigationProp<ParamListBase>>();
  const labelDynamicColor = {
    color: focused ? Colors.lightGreen : Colors.gray,
  };
  const dynamicIconTintColor = {
    tintColor: focused ? Colors.lightGreen : Colors.gray,
  };

  const changeTabHandle = (): void => {
    navigation.jumpTo(label);
    mixpanelTrackEvents(mixPanelEventsKeys.explore_screen ,{label})
  };

  return (
    <TouchableOpacity onPress={changeTabHandle} activeOpacity={1} style={styles.rootIconViewStyle}>
      <View style={styles.imageViewStyle}>
        <Image source={icon} style={StyleSheet.flatten([styles.imageStyle, dynamicIconTintColor])} />
      </View>
      <AppText style={StyleSheet.flatten([(styles.labelStyle, labelDynamicColor)])}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default CustomTabIcon;
