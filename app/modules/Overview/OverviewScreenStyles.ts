import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  btnContainer: {
    backgroundColor: Colors.white,
    padding: verticalScale(9),
    margin: verticalScale(5),
    borderRadius: verticalScale(8),
    alignItems: 'center',
  },
});
