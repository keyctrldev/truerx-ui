import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { prescriptionListData } from '../../../utils';
import { styles } from './PrescriptionsListScreenStyles';
import { prescriptionListDataProps } from '../../../types';
import { CustomBackButton, SafeAreaContainer } from '../../../components';
import PrescriptionList from '../../../components/prescriptions-list/PrescriptionsList';

const PrescriptionsListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }: { item: prescriptionListDataProps }) => (
    <PrescriptionList
      count={item.count}
      dosage={item.dosage}
      drugName={item.drugName}
      buyerName={item.buyerName}
      totalPrice={item.totalPrice}
      buyerImage={item.buyerImage}
      deliveryType={item.deliveryType}
      firstButtonOnPress={() => {}}
      secondButtonOnPress={() => {}}
    />
  );

  return (
    <SafeAreaContainer style={styles.container}>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.mainInterface}>
        <Text style={styles.heading}>{'Transfer your prescriptions'}</Text>
        <FlatList
          bounces={false}
          renderItem={renderItem}
          data={prescriptionListData}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaContainer>
  );
};
export default PrescriptionsListScreen;
