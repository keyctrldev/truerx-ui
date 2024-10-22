import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { PharmacyPriceList } from '../../../components';
import { Icons } from '../../../assets';

const PharmacyPriceListScreen = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <PharmacyPriceList
          pharmacyLogo={Icons.pharmacyLogo}
          pharmacyName="mark cuban pharmacy"
          pharmacyDistance="home delivery"
          price={5.23}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default PharmacyPriceListScreen;
