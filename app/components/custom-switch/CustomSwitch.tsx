import React, { useCallback, useEffect, useRef } from 'react';
import { TouchableWithoutFeedback, Animated } from 'react-native';
import { styles } from './CustomSwitchStyle';
import { Colors, horizontalScale } from '../../theme';

interface SwitchProps {
  activeColor?: string;
  inActiveColor?: string;
  thumbColor?: string;
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

const CustomSwitch: React.FC<SwitchProps> = ({
  activeColor = '#35C5F3',
  inActiveColor = '#F2F5F7',
  thumbColor = Colors.white,
  value,
  onValueChange,
}) => {
  const switchTranslate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(switchTranslate, {
      toValue: horizontalScale(value ? 22 : 1),
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value, switchTranslate]);

  const backgroundColor = switchTranslate.interpolate({
    inputRange: [0, 22],
    outputRange: [inActiveColor, activeColor],
  });

  const handlePress = useCallback(() => {
    onValueChange(!value);
  }, [onValueChange, value]);

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View style={[styles.container, { backgroundColor }]}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ translateX: switchTranslate }],
              backgroundColor: thumbColor,
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default CustomSwitch;
