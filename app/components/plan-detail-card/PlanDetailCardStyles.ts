import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  detailCardContainer: {
    padding: moderateScale(14),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    marginBottom: verticalScale(10),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  trueRxIcon: {
    marginRight: horizontalScale(3),
  },
  planText: {
    color: Colors.black,
    fontSize: moderateScale(16),
  },
  separator: {
    height: verticalScale(2),
    margin: moderateScale(8),
    backgroundColor: Colors.separatorColor,
  },
  detailContainer: {
    flexDirection: 'row',
    paddingTop: verticalScale(5),
    justifyContent: 'space-between',
  },
  detailKeyName: {
    flex: 1,
    fontWeight: 700,
    color: Colors.black,
    fontSize: moderateScale(12),
  },
  detailKeyValue: {
    flex: 1,
    textAlign: 'right',
    color: Colors.dustGray,
    fontSize: moderateScale(12),
  },
});
