import React, {ReactNode} from 'react';
import { ViewStyle, StyleProp, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface SVGIconProps {
  component: React.ReactElement<SvgProps> | ReactNode;
  containerStyle?: StyleProp<ViewStyle> | undefined;
}

const SVGIcon: React.FC<SVGIconProps> = (props: SVGIconProps) => {
  const {containerStyle, component} = props;
  return (
    <View
      style={containerStyle}>
      {component}
    </View>
  );
};

export {SVGIcon};
