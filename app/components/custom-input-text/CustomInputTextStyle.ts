import { StyleSheet } from 'react-native';
import { Colors, moderateScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.gray,
  },
  input: {
    borderWidth:1,
    overflow: 'hidden',
    backgroundColor: Colors.white,
    borderColor: Colors.mediumGray,
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    borderBottomRightRadius: moderateScale(10),
  },
});
