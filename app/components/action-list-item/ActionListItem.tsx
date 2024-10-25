import React, { memo } from 'react';
import { Text, Pressable, View } from 'react-native';

import { SVGIcon } from '../common';
import { Colors } from '../../theme';
import { styles } from './ActionListItemStyles';
import { ChevronRight } from '../../assets/svgs';
import { ActionListItemProps } from '../../types';
import CustomSwitch from '../custom-switch/CustomSwitch';

const ActionListItem = (props: ActionListItemProps) => {
  const {
    label,
    value,
    onPress,
    isDisabled,
    customStyles,
    actionNameStyles,
    isSwitched = false,
    isSeparator = false,
    onValueChange = () => {},
  } = props;

  return (
    <>
      <Pressable style={[styles.actionListContainer, customStyles]} onPress={!isDisabled ? onPress : null}>
        <Text style={[styles.actionName, actionNameStyles]}>{label}</Text>
        {!isSwitched && <SVGIcon component={<ChevronRight />} />}
        {isSwitched && (
          <CustomSwitch
            value={value || false}
            onValueChange={onValueChange}
            activeColor={Colors.primaryThemeColor}
            inActiveColor={Colors.primaryThemeColor}
          />
        )}
      </Pressable>
      {isSeparator && <View style={styles.separator} />}
    </>
  );
};

export default memo(ActionListItem);
