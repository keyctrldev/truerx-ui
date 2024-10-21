import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

import { styles } from './SettingScreenStyles';
import { headerComponentStrings } from '../../constants';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsScreen = () => {
  const [fcm, setFcm] = useState<string | null>('');

  const fetchFcmToken = async () => {
    try {
      const fcmToken = await AsyncStorage.getItem('fcm_token');
      setFcm(fcmToken);
    } catch (error) {
      Alert.alert('Failed to fetch FCM token');
    }
  };

  useEffect(() => {
    fetchFcmToken();
  }, []);
  return (
    <SafeAreaContainer style={styles.containerStyle}>
      <CustomHeader heading={headerComponentStrings.Settings} />
      <View style={styles.body}>
        <AppText style={styles.label} selectable>{`FCM : ${fcm}`}</AppText>
      </View>
    </SafeAreaContainer>
  );
};

export default SettingsScreen;
