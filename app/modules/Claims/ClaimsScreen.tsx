import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { ActivityLoader, AppText, ListViewCell, SafeAreaContainer } from '../../components';
import { styles } from './ClaimsScreenStyle';
import { Icons } from '../../assets';
import { claimsScreenStrings } from '../../constants';
import useClaimsScreen from './useClaimsScreen';
const ClaimsScreen = () => {
  const { handleLogOutPress, isLoading, claimsData } = useClaimsScreen();
  return (
    <SafeAreaContainer style={styles.claimContainerStyle}>
      {isLoading && <ActivityLoader isVisible={isLoading} />}
      <View style={styles.headerContainer}>
        <AppText style={styles.title}>{claimsScreenStrings.claimsDemoHeading}</AppText>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8}>
            <Image source={Icons.bellIcon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconWrapper} activeOpacity={0.8} onPress={handleLogOutPress}>
            <Image source={Icons.profileIcon} style={styles.icon} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>

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
      />
    </SafeAreaContainer>
  );
};
export default ClaimsScreen;
