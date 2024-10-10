import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },

  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center',
    color: Colors.white,
  },
  flatlistContainer: {
    marginHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },

  headerContainer: {
    marginBottom: verticalScale(10),
  },

  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
  },
  userImgCon: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  userImage: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(25),
    resizeMode: 'contain',
  },

  userNameTxt: {
    fontSize: moderateScale(20),
    color: Colors.black,
    fontWeight: '700',
    marginLeft: horizontalScale(12),
    marginTop: verticalScale(3),
    textAlignVertical: 'top',
  },
});
