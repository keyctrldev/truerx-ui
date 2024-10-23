import React from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { PharmacyPriceList } from '../../../components';
import { Icons } from '../../../assets';
import { Colors } from '../../../theme';

const PharmacyPriceListScreen = () => {
  const handlePress = () => {
    Alert.alert('For Demo');
  };

  return (
    <SafeAreaView>
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
