import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  chatContainerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  chatTextInput: {
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  messageContainer: {
    padding: moderateScale(10),
    borderRadius: moderateScale(5),
  },
  meassageInterface: {
    padding: moderateScale(8),
    backgroundColor: Colors.white,
    borderRadius: moderateScale(10),
  },
  messageUser: {
    fontWeight: 'bold',
  },
  messageTime: {
    color: '#888',
    textAlign: 'right',
    paddingTop: verticalScale(5),
    fontSize: moderateScale(12),
  },
  messageChat: {
    color: Colors.black,
    fontSize: moderateScale(16),
  },
  send: {
    width: moderateScale(25),
    height: horizontalScale(25),
  },
  connect: {
    margin: moderateScale(10),
  },
  conBtn: {
    color: Colors.white,
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(30),
  },
});
