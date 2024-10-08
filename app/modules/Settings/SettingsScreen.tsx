import React, { useEffect, useState } from 'react';
import { AppText, CustomHeader, SafeAreaContainer } from '../../components';
import { Colors, horizontalScale } from '../../theme';
import { Alert, StyleSheet, View } from 'react-native';
import { headerComponentStrings } from '../../constants';
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

export const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: Colors.skyBlue,
  },

  body: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center',
    color: Colors.white,
    paddingHorizontal: horizontalScale(10),
  },
});
