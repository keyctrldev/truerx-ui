import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.white,
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

  userInfoCon: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray,
    paddingVertical: verticalScale(10),
  },

  userName: {
    fontSize: moderateScale(18),
    fontWeight: '700',
    marginLeft: horizontalScale(15),
    textAlignVertical: 'top',
    color: Colors.black,
  },

  backImgCon: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  inputContainerStyle: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.gray,
    borderTopWidth: 1,
  },
});
