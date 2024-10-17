import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  medicineContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(12),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicine: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: moderateScale(364),
    height: moderateScale(74),
    borderRadius: moderateScale(10),
  },
  medicineIcon: {
    backgroundColor: Colors.viridianGreen,
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    width: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pillsImage: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  medicineDetails: {
    padding: moderateScale(4),
    paddingLeft: moderateScale(6),
    justifyContent: 'center',
    alignContent: 'center',
  },

  medicineName: {
    fontWeight: '800',
    fontSize: moderateScale(16),
  },

  medicineDosage: {
    flexDirection: 'row',
    columnGap: moderateScale(4),
  },

  textDosage: {
    fontWeight: '500',
    fontSize: moderateScale(14),
  },

  medicineRefill: {
    flexDirection: 'row',
    columnGap: moderateScale(4),
  },

  textRefill: {
    color: Colors.argent,
    fontSize: moderateScale(14),
  },
});
