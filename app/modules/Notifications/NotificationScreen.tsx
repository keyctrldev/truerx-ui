import React, { useEffect, useState } from 'react';
import { AppText, SafeAreaContainer } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './NotificationScreenStyle';
import { Alert, BackHandler, Image, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { headerComponentStrings, Routes } from '../../constants';

const NotificationScreen = () => {
  const { replace } = useNavigation<StackNavigationProp<ParamListBase>>();
  const [fcm, setFcm] = useState<string | null>('');

  const fetchFcmToken = async () => {
    try {
      const fcmToken = await AsyncStorage.getItem('fcm_token');
      setFcm(fcmToken);
    } catch (error) {
      Alert.alert('Failed to fetch FCM token');
    }
  };

  const onBackPress = () => {
    replace(Routes.home);
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => backHandler.remove();
  }, [onBackPress]);

  useEffect(() => {
    fetchFcmToken();
  }, []);
  return (
    <SafeAreaContainer style={styles.rootContainerStyle}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={onBackPress}>
          <Image source={Icons.backIcon} style={styles.backIconStyle} />
        </TouchableOpacity>
        <AppText style={styles.headerText}>{headerComponentStrings.Notification}</AppText>
      </View>
      <View style={styles.bodyContainer}>
        <AppText style={styles.tokenTextStyle} selectable>
          FCM : {fcm}
        </AppText>
      </View>
    </SafeAreaContainer>
  );
};

export default NotificationScreen;
