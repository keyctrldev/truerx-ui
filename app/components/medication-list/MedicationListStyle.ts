import { StyleSheet } from 'react-native';
import { Colors, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  medicineContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  medicine: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  medicineIcon: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.viridianGreen,
    borderTopLeftRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  pillsImage: {
    width: moderateScale(30),
    height: moderateScale(30),
  },
  medicineDetails: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: moderateScale(6),
  },

  medicineName: {
    fontSize: moderateScale(20),
    fontWeight: '800',
  },

  medicineDosage: {
    flexDirection: 'row',
    columnGap: moderateScale(4),
  },

  textDosage: {
    fontSize: moderateScale(14),
    fontWeight: '500',
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
