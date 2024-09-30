import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: moderateScale(16),
  },
  item: {
    padding: moderateScale(16),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.black,
    marginVertical: verticalScale(5),
  },
  name: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
  },
  languages: {
    marginVertical: verticalScale(3),
    fontSize: moderateScale(14),
    color: Colors.lightBlack,
  },
});
