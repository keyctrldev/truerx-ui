import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.white,
    margin: moderateScale(10),
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    shadowColor: Colors.black,
    elevation: moderateScale(5),
    shadowOffset: {
      height: verticalScale(3),
      width: horizontalScale(3),
    },
    shadowRadius: moderateScale(2),
    shadowOpacity: 0.2,
  },
  logoContainer: {
    flexDirection: 'row',
    gap: moderateScale(3),
    paddingVertical: moderateScale(6),
    marginHorizontal: horizontalScale(4),
  },
  line: {
    height: moderateScale(2),
    marginHorizontal: horizontalScale(6),
    marginVertical: moderateScale(8),
    backgroundColor: Colors.separatorColor,
  },
  card: {
    flexDirection: 'row',
    padding: moderateScale(2),
    gap: moderateScale(2),
    marginBottom: moderateScale(4),
  },
  cardColumn: {
    textAlign: 'center',
    flex: 1,
  },
  detailsContainer: {
    padding: moderateScale(4),
    gap: moderateScale(2),
  },
  detailsLabel: {
    color: Colors.black,
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  detailsValue: {
    color: Colors.argent,
    fontWeight: '600',
    fontSize: moderateScale(13),
  },
});
