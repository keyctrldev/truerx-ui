import React from 'react';
import { View } from 'react-native';

import { Icons } from '../../../assets';
import { NotificationTile } from '../../../components';
import { styles } from './NotificationTileScreenStyles';

const NotificationTileScreen: React.FC = () => {
  return (
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
  );
};

export default NotificationTileScreen;
