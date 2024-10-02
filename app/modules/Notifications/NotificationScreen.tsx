import React, { useEffect, useState } from 'react';
import { AppText, SafeAreaContainer } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './NotificationScreenStyle';
import { Alert, Image, TouchableOpacity, View } from 'react-native';
import { Icons } from '../../assets';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const NotificationScreen = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
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
    navigation.goBack();
  };

  useEffect(() => {
    fetchFcmToken();
  }, []);
  return (
    <SafeAreaContainer style={styles.rootContainerStyle}>
      <TouchableOpacity style={styles.headerContainer} onPress={onBackPress}>
        <Image source={Icons.backIcon} style={styles.backIconStyle} />
      </TouchableOpacity>
      <View style={styles.bodyContainer}>
        <AppText style={styles.tokenTextStyle} selectable>
          FCM : {fcm}
        </AppText>
      </View>
    </SafeAreaContainer>
  );
};

export default NotificationScreen;
