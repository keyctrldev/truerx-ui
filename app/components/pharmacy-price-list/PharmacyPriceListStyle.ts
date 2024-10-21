import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  pharmacyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(16),
    marginVertical: verticalScale(6),
    padding: moderateScale(16),
    borderRadius: moderateScale(10),
    backgroundColor: 'white',
  },
  pharmacy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pharmacyLogo: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pharmacyDetails: {
    marginHorizontal: moderateScale(8),
  },
  pharmacyName: {
    fontWeight: '800',
    fontSize: moderateScale(14),
    textTransform: 'capitalize',
  },
  pharmacyDistance: {
    fontSize: moderateScale(14),
    color: Colors.argent,
  },
  priceDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontSize: moderateScale(20),
    fontWeight: '800',
  },
  navigationArrow: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
});
