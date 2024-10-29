import React from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { Icons } from '../../../assets';
import { Colors } from '../../../theme';
import { CustomBackButton, PharmacyPriceList } from '../../../components';

const PharmacyPriceListScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handlePress = () => {
    Alert.alert('For Demo');
  };

  return (
    <SafeAreaView>
      <CustomBackButton onBackPress={handleBackPress} />
      <PharmacyPriceList
        pharmacyLogo={Icons.pharmacyLogo}
        pharmacyName="mark cuban pharmacy"
        pharmacyDistance="home delivery"
        price={5.23}
        additionalPriceStyle={{ color: Colors.green }}
        onPress={handlePress}
      />
      <PharmacyPriceList
        pharmacyLogo={Icons.pharmacyLogo}
        pharmacyName="mark cuban pharmacy"
        pharmacyDistance="home delivery"
        price={5.24}
        onPress={handlePress}
      />
    </SafeAreaView>
  );
};
export default PharmacyPriceListScreen;
