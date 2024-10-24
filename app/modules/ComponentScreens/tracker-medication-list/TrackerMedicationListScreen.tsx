import React from 'react';
import { View, FlatList } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { PATrackerMedicationData } from '../../../utils';
import { styles } from './TrackerMedicationListScreenStyles';
import { TrackerMedicationListDataProps } from '../../../types';
import { AppText, CustomBackButton, SafeAreaContainer } from '../../../components';
import TrackerMedicationItem from '../../../components/tracker-medication-item/TrackerMedicationItem';

const TrackerMedicationListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

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
      <CustomBackButton onBackPress={handleBackPress} />
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
