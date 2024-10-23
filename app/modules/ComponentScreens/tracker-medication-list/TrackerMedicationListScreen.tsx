import React from 'react';
import { View, FlatList } from 'react-native';

import { PATrackerMedicationData } from '../../../utils';
import { styles } from './TrackerMedicationListScreenStyles';
import { TrackerMedicationListDataProps } from '../../../types';
import { AppText, SafeAreaContainer } from '../../../components';
import TrackerMedicationItem from '../../../components/tracker-medication-item/TrackerMedicationItem';

const TrackerMedicationListScreen = () => {
  const renderItem = ({ item }: { item: TrackerMedicationListDataProps }) => (
    <TrackerMedicationItem
      date={item.date}
      type={item.type}
      dosage={item.dosage}
      drugName={item.drugName}
      onInfoIconPress={() => {}}
      dosageType={item.dosageType}
    />
  );
  return (
    <SafeAreaContainer style={styles.container}>
      <View style={styles.mainInterface}>
        <AppText style={styles.heading}>{'Your medication'}</AppText>
        <FlatList
          bounces={false}
          renderItem={renderItem}
          data={PATrackerMedicationData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaContainer>
  );
};

export default TrackerMedicationListScreen;
