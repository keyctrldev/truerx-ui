import React from 'react';
import { View } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { Icons } from '../../../assets';
import { styles } from './NotificationTileScreenStyles';
import { CustomBackButton, NotificationTile, SafeAreaContainer } from '../../../components';

const NotificationTileScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaContainer>
      <CustomBackButton onBackPress={handleBackPress} />
      <View style={styles.container}>
        <NotificationTile
          icon={Icons.tickCircle}
          title="Prior Authorization Approved!"
          message="trueRx has approved your prior authorization for Mounjaro"
        />
        <NotificationTile
          icon={Icons.tickCircle}
          iconStyle={styles.iconAdditionalStyles}
          title="Prior Authorization Denied!"
          message="trueRx has approved your prior authorization for Ozempic"
        />
        <NotificationTile
          highlighted
          icon={Icons.tickCircle}
          title="Medication refill coming soon"
          message="Your Ozempic medication is due for a refill.Please call your pharmacy today."
        />
      </View>
    </SafeAreaContainer>
  );
};

export default NotificationTileScreen;
