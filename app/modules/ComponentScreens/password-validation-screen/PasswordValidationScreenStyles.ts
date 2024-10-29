import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: Colors.secondaryBackground,
    color: Colors.black,
  },
  errorTextContainer: {
    paddingHorizontal: verticalScale(20),
  },
});
