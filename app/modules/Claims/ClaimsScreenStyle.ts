import { StyleSheet } from 'react-native';
import { Colors, horizontalScale, moderateScale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  claimContainerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.white,
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.lightSlateGray,
  },
  title: {
    fontSize: moderateScale(32),
    fontWeight: 'bold',
    color: Colors.green,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: horizontalScale(34),
    height: verticalScale(32),
    marginLeft: horizontalScale(16),
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  claimsHistoryContainer: {
    backgroundColor: Colors.gray,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(16),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Colors.lightSlateGray,
  },
  claimsHistoryTitle: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    color: Colors.horizonBlue,
  },
  claimsStatusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
    backgroundColor: Colors.gray,
  },
  columnHeader: {
    fontSize: moderateScale(20),
    color: Colors.lightBlack,
  },
  statusText: {
    marginRight: horizontalScale(35),
  },
  footerLoaderContainer: {
    paddingVertical: verticalScale(20),
  },

  listEmptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listEmptyText: {
    color: Colors.white,
    fontWeight: '400',
  },

  listContainer: {
    flexGrow: 1,
    paddingTop: verticalScale(10),
  },
});
