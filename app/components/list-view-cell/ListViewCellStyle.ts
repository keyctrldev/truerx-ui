import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    marginHorizontal: horizontalScale(10),
    padding: moderateScale(17),
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(5),
    shadowColor: Colors.black,
    elevation: moderateScale(5),
    shadowOffset: {
      height: verticalScale(3),
      width: horizontalScale(3),
    },
    shadowRadius: moderateScale(2),
    shadowOpacity: 0.2,
  },
  headingContainer: {
    width: '70%',
  },
  statusTextStyle: {
    fontSize: moderateScale(16),
    textAlign: 'right',
  },
  statusContainer: {
    paddingLeft: horizontalScale(5),
    width: '30%',
    paddingTop: verticalScale(5),
  },
  listHeading: {
    color: Colors.black,
    fontWeight: '800',
    fontSize: moderateScale(18),
  },
  listDetails: {
    marginTop: verticalScale(15),
    color: Colors.black,
    fontSize: moderateScale(16),
    paddingRight: horizontalScale(30),
  },
});
