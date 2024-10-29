import React, { memo } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { SVGIcon } from '../common';
import { Colors } from '../../theme';
import AppText from '../app-text/AppText';
import { styles } from './ActionListItemStyles';
import { ChevronRight } from '../../assets/svgs';
import { ActionListItemProps } from '../../types';
import CustomSwitch from '../custom-switch/CustomSwitch';
import { useGlobalStyles } from '../../utils/GlobalStyles';

const ActionListItem = (props: ActionListItemProps) => {
  const {
    label,
    value,
    onPress,
    isDisabled,
    customStyles,
    actionNameStyles,
    isSwitch = false,
    isSeparator = false,
    onValueChange = () => {},
  } = props;

  const GlobalStyles = useGlobalStyles();

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={isSwitch ? 1 : 0.8}
        style={[GlobalStyles.rowSpaceBetweenContainer, customStyles]}>
        <AppText style={[styles.actionName, actionNameStyles]}>{label}</AppText>
        {isSwitch ? (
          <CustomSwitch
            value={value || false}
            onValueChange={onValueChange}
            activeColor={Colors.primaryThemeColor}
            inActiveColor={Colors.primaryThemeColor}
          />
        ) : (
          <SVGIcon component={<ChevronRight />} />
        )}
      </TouchableOpacity>
      {isSeparator && <View style={styles.separator} />}
    </>
  );
};

export default memo(ActionListItem);
