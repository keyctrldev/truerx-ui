import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

interface SVGIconProps {
  component: any;
  onPress?: () => void;
  containerStyle?: StyleProp<ViewStyle> | undefined;
  disabled?: boolean;
}

const SVGIcon: React.FC<SVGIconProps> = (props: SVGIconProps) => {
  const { onPress, containerStyle, component, disabled } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyle}
      disabled={!onPress || disabled}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}>
      {component}
    </TouchableOpacity>
  );
};

export { SVGIcon };
