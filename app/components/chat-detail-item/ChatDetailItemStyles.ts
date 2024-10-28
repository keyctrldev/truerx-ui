import { StyleSheet } from 'react-native';

import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  chatContainer: {
    maxWidth: '90%',
    marginVertical: moderateScale(10),
    paddingVertical: verticalScale(14),
    paddingHorizontal: horizontalScale(10),
    borderBottomLeftRadius: horizontalScale(8),
    borderBottomRightRadius: horizontalScale(8),
  },
  chatContent: {
    fontSize: moderateScale(16),
  },
  senderStyles: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primaryThemeColor,
    borderTopLeftRadius: horizontalScale(8),
  },
  receiverStyles: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.gray,
    borderTopRightRadius: horizontalScale(8),
  },
  senderTextStyles: {
    color: Colors.white,
  },
  receiverTextStyles: {
    color: Colors.black,
  },
});
