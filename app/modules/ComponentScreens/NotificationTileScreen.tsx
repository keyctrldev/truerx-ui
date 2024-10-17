import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NotificationTile } from '../../components';

const NotificationTileScreen = () => {
  return (
    <View style={styles.container}>
      <NotificationTile message="TEST" title="DEMO" time="123" />
    </View>
  );
};

export default NotificationTileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
