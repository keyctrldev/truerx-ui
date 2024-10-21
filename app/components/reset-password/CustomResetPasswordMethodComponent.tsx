import React, { memo } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { CustomResetPasswordMethodComponentProps } from '../../types';
import { styles } from './CustomResetPasswordMethodComponentStyles';

const CustomResetPasswordMethodComponent = (props: CustomResetPasswordMethodComponentProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      style={[styles.btnContainer, props.style, props.isSelected && styles.activeContainer]}
      onPress={props.onSelectMethod}>
      <View style={styles.rowContainer}>
        <Image source={props.icon} style={[styles.iconStyle, props.iconStyle]} />
        <Text style={[styles.titleTextStyle, props.titleTextStyle]}>{props.title} </Text>
      </View>
      {props.subTitle && <Text style={[styles.subTitleTextStyle, props.subTitleTextStyle]}>{props.subTitle}</Text>}
    </TouchableOpacity>
  );
};

export default memo(CustomResetPasswordMethodComponent);
