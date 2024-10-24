import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: Colors.indigo,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  searchBar: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(2),
    borderRadius: moderateScale(10),
  },
  input: {
    fontSize: moderateScale(16),
    color: Colors.black,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(8),
    marginVertical: verticalScale(4),
    gap: moderateScale(2),
  },
  location: {
    fontSize: moderateScale(16),
    color: Colors.white,
  },
});
