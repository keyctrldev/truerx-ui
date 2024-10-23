import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#263845',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
  },
  searchBar: {
    alignItems: 'center',
    paddingHorizontal: horizontalScale(4),
    paddingVertical: verticalScale(4),
    borderRadius: moderateScale(10),
    textTransform: 'capitalize',
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
