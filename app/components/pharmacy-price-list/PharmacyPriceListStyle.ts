import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  pharmacyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: moderateScale(3),
    paddingHorizontal: moderateScale(14),
    paddingVertical: moderateScale(4),
    margin: moderateScale(12),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  pharmacy: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'justify',
    width: '70%',
  },
  pharmacyLogo: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  pharmacyDetails: {
    flex: 1,
    padding: moderateScale(10),
  },
  pharmacyName: {
    fontWeight: '800',
    textTransform: 'capitalize',
  },
  pharmacyDistance: {
    color: Colors.argent,
  },
  priceDetails: {
    width: '30%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: moderateScale(2),
  },
  price: {
    fontWeight: '800',
    fontSize: moderateScale(20),
    padding: moderateScale(2),
  },
  navigationArrow: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
});
