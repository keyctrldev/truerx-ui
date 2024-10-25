import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(15),
  },
  leftIconStyle: {
    marginRight: horizontalScale(10),
  },
  iconDimension: {
    width: verticalScale(25),
    height: verticalScale(25),
  },
  rightIconStyle: {
    marginLeft: horizontalScale(10),
  },
  btnContainerStyle: {
    marginVertical: verticalScale(5),
  },
});
