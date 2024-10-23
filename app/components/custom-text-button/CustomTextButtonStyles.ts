import { StyleSheet } from 'react-native';

import { Colors, horizontalScale, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleTextStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(16),
  },
  svgIconStyles: {
    paddingHorizontal: horizontalScale(10),
  },
});
