import { StyleSheet } from 'react-native';
import { Colors, verticalScale } from '../../../theme';

export const styles = StyleSheet.create({
  cardContainerStyle: {
    marginVertical: verticalScale(10),
  },
  containerStyle: {
    paddingHorizontal: verticalScale(10),
    backgroundColor: Colors.secondaryBackground,
  },
});
