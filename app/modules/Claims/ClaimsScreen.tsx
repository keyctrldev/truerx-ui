import React from 'react';
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { ActivityLoader, AppText, CustomHeader, ListViewCell, SafeAreaContainer } from '../../components';
import { styles } from './ClaimsScreenStyle';
import { Icons } from '../../assets';
import { claimsScreenStrings, headerComponentStrings } from '../../constants';
import useClaimsScreen from './useClaimsScreen';
import { Colors } from '../../theme';

const ClaimsScreen = () => {
  const { handleLogOutPress, isLoading, claimsData, handleNotificationPress, isLoadingMore, loadMore } =
    useClaimsScreen();
  return (
    <SafeAreaContainer style={styles.claimContainerStyle}>
      {isLoading && <ActivityLoader isVisible={isLoading} />}
      <CustomHeader heading={headerComponentStrings.Claims} />

      {/* Claims History Section */}
      <View style={styles.claimsHistoryContainer}>
        <AppText style={styles.claimsHistoryTitle}>{claimsScreenStrings.historyHeading}</AppText>
      </View>

      {/* Claims and Status Sections */}
      <View style={styles.claimsStatusRow}>
        <AppText style={styles.columnHeader}>{claimsScreenStrings.claimSection}</AppText>
        <AppText style={[styles.columnHeader, styles.statusText]}>{claimsScreenStrings.statusSection}</AppText>
      </View>
      <FlatList
        data={claimsData}
        keyExtractor={(_, index) => `${index}claimItem`}
        renderItem={({ item, index }) => (
          <ListViewCell typeOfConsultance={item.name} status={item.status} Description={item.description} key={index} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() =>
          isLoadingMore ? (
            <View style={styles.footerLoaderContainer}>
              <ActivityIndicator size={'large'} color={Colors.primary} />
            </View>
          ) : null
        }
      />
    </SafeAreaContainer>
  );
};
export default ClaimsScreen;
