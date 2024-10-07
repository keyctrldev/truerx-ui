import React from 'react';
import { FlatList, View } from 'react-native';
import { ActivityLoader, AppText, CustomHeader, ListViewCell, SafeAreaContainer } from '../../components';
import { styles } from './ClaimsScreenStyle';
import { claimsScreenStrings, commonStrings, headerComponentStrings } from '../../constants';
import { useQuery } from '@apollo/client';
import { GET_CLAIMS } from '../../api';

const ClaimsScreen = () => {
  const { loading, error, data } = useQuery(GET_CLAIMS);
  return (
    <SafeAreaContainer style={styles.claimContainerStyle}>
      <ActivityLoader isVisible={loading} />
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

      {/* Claims List */}
      <FlatList
        data={data?.claims ?? []}
        keyExtractor={(_, index) => `${index}claimItem`}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item, index }) => (
          <ListViewCell
            typeOfConsultance={item.medicationName}
            status={item.claimStatus}
            Description={item.medicationCost}
            key={index}
          />
        )}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={
          <View style={styles.listEmptyContainer}>
            <AppText style={styles.listEmptyText}>{commonStrings.NoDataFound}</AppText>
          </View>
        }
      />
    </SafeAreaContainer>
  );
};
export default ClaimsScreen;
